import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from '../../landing-page/landing-page.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { AuthGuard } from '../../shared/guard/auth.guard';
import { RegisterHomeComponent } from 'src/app/register-home/register-home.component';
import { CalculateComponent } from 'src/app/calculate/calculate.component';
import { FullSeasonCalcComponent } from 'src/app/calculate/individual-calculators/full-season-calc/full-season-calc.component';
import { WindowPaybackCalcComponent } from 'src/app/calculate/individual-calculators/window-payback-calc/window-payback-calc.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  { path: 'sign-in', component: LandingPageComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register-home',
    component: RegisterHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'calculate',
    component: CalculateComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'full-season',
        component: FullSeasonCalcComponent
      },
      {
        path: 'window-payback',
        component: WindowPaybackCalcComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
