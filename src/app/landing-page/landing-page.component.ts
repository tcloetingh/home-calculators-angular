import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SampleCalculatorComponent } from '../sample-calculator/sample-calculator.component';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  isLoggedIn = this.authService.isLoggedIn;

  constructor(
    public dialog: MatDialog,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  signInRedirect(): void {
    this.authService.GoogleAuth();
  }

  openModal(): void {
    const sampleCalcDialogRef = this.dialog.open(SampleCalculatorComponent, {
      panelClass: 'custom-dialog-container'
    });
  }
}
