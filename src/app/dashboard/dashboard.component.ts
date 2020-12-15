import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { HouseDBService } from '../shared/services/houseDB.service';

export interface HomeValues {
  name: string;
  position: number;
  value: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fetchedHomeData;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public dialog: MatDialog,
    public houseDBservice: HouseDBService
  ) {}

  ngOnInit() {
    this.houseDBservice.getHome().subscribe(res => {
      this.fetchedHomeData = res;
      console.log(this.fetchedHomeData);
    });
  }
}
