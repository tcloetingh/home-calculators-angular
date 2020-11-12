import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public dialog: MatDialog
  ) // public dialogConfig: MatDialogConfig
  {}

  ngOnInit(): void {}

  openLogoutModal() {
    const myModal = this.dialog.open(LogoutModalComponent);
  }
}
