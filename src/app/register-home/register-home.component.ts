import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelpPageComponent } from '../help-page/help-page.component';
import { MatDialog } from '@angular/material/dialog';
import { HouseDBService } from '../shared/services/houseDB.service';

@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.css']
})
export class RegisterHomeComponent implements OnInit {
  homeForm: FormGroup;

  constructor(
    private houseDBservice: HouseDBService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.homeForm = this.formBuilder.group({
      houseName: [null, [Validators.required]],
      squareFootage: [null, Validators.required],
      yearBuild: [null, Validators.required],
      stories: [null, Validators.required],
      rValue: [null, Validators.required],
      doors: [null, Validators.required],
      numberWindows: [null, Validators.required],
      sqftWindows: [null, Validators.required],
      windowType: [null, Validators.required],
      heatSource: [null, Validators.required],
      kwh: [null],
      heatingDD: [null, Validators.required],
      coolingDD: [null, Validators.required]
    });
  }

  onSubmit() {
    if (!this.homeForm.valid) {
      return;
    }
    const houseData = this.homeForm.value;
    console.log(this.homeForm.value);
    this.houseDBservice.createAndStoreHome(houseData);
  }

  openModal() {
    const dialogRef = this.dialog.open(HelpPageComponent);
  }
}