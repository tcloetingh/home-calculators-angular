import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FireBase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Setup Components
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

// Components
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from './material/material.module';
import { SampleCalculatorComponent } from './sample-calculator/sample-calculator.component';

@NgModule({
  declarations: [AppComponent, MainNavComponent, LandingPageComponent, SampleCalculatorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    BrowserAnimationsModule, // storage
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
