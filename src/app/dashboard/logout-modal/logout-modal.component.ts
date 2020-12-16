import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HouseDBService } from 'src/app/shared/services/houseDB.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent implements OnInit {
  homeForm: FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public formBuilder: FormBuilder,
    public houseDBservice: HouseDBService,
    private dialogRef: MatDialogRef<LogoutModalComponent>
  ) {}

  ngOnInit(): void {
    this.homeForm = this.formBuilder.group({
      houseName: [null, [Validators.required]],
      squareFootage: [null, Validators.required],
      yearBuilt: [null, Validators.required],
      stories: [null, Validators.required],
      rValue: [null, Validators.required],
      doors: [null, Validators.required],
      numberWindows: [null, Validators.required],
      sqftWindows: [null, Validators.required],
      windowType: [null, Validators.required],
      heatSource: [null, Validators.required],
      heatingDD: [null, Validators.required],
      coolingDD: [null, Validators.required],
      kwh: [null, Validators.required]
    });
  }

  onSubmit() {
    if (!this.homeForm.valid) {
      console.log('not working');
      return;
    }
    const houseData = this.homeForm.value;

    console.log(houseData);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
