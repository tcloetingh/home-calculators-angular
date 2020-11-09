import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SampleCalculatorComponent } from '../sample-calculator/sample-calculator.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  openModal() {
    this.dialog.open(SampleCalculatorComponent);
  }
}
