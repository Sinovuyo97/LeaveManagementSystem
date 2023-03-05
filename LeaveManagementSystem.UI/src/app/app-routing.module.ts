import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { LoginGuard } from './usermanagement/login/guards/login.guard';
import { LoginComponent } from './usermanagement/login/login.component';

const routes: Routes = [
   {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'leave',
    component: LeaveManagementComponent,
    canActivate: [ LoginGuard ]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
