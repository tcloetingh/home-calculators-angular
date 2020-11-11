import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from '../../landing-page/landing-page.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { AuthGuard } from '../../shared/guard/auth.guard';
import { RegisterHomeComponent } from 'src/app/register-home/register-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LandingPageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: 'register-home', component: RegisterHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
