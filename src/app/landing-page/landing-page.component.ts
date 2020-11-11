import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SampleCalculatorComponent } from '../sample-calculator/sample-calculator.component';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(public dialog: MatDialog, public authService: AuthService) {}
  ngOnInit(): void {}

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.minHeight = '600px';
    const dialogRef = this.dialog.open(SampleCalculatorComponent, dialogConfig);
  }
}
