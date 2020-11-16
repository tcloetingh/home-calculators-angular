import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CalcModalComponent } from './calc-modal/calc-modal.component';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openModal() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(CalcModalComponent);
  }
}
