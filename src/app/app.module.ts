import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FireBase
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Setup Components
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';

// Font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Auth service
import { AuthService } from './shared/services/auth.service';
// Data Sharing Service
import { DataSharingService } from './shared/services/data-sharing.service';

// Components
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './material/material.module';
import { SampleCalculatorComponent } from './sample-calculator/sample-calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculationsService } from './shared/services/calculations.service';
import { RegisterHomeComponent } from './register-home/register-home.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { LogoutModalComponent } from './dashboard/logout-modal/logout-modal.component';
import { HouseDBService } from './shared/services/houseDB.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { TestModalComponent } from './test-modal/test-modal.component';
import { CalculateComponent } from './calculate/calculate.component';
import { CalcModalComponent } from './calculate/calc-modal/calc-modal.component';
import { MustLoginComponent } from './main-nav/must-login/must-login.component';
import { FullSeasonCalcComponent } from './calculate/individual-calculators/full-season-calc/full-season-calc.component';
import { WindowPaybackCalcComponent } from './calculate/individual-calculators/window-payback-calc/window-payback-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LandingPageComponent,
    SampleCalculatorComponent,
    DashboardComponent,
    RegisterHomeComponent,
    HelpPageComponent,
    LogoutModalComponent,
    LoadingSpinnerComponent,
    TestModalComponent,
    CalculateComponent,
    CalcModalComponent,
    MustLoginComponent,
    FullSeasonCalcComponent,
    WindowPaybackCalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth,
    BrowserAnimationsModule, // storage
    LayoutModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  providers: [
    AuthService,
    CalculationsService,
    HouseDBService,
    DataSharingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
