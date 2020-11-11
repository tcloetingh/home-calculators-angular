import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FireBase
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Setup Components
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';

// Auth service
import { AuthService } from './shared/services/auth.service';

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

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LandingPageComponent,
    SampleCalculatorComponent,
    DashboardComponent,
    RegisterHomeComponent,
    HelpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth,
    BrowserAnimationsModule, // storage
    LayoutModule,
    MaterialModule
  ],
  providers: [AuthService, CalculationsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
