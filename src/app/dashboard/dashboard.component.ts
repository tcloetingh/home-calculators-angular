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

const HOME_DATA: HomeValues[] = [
  { position: 1, name: 'House Name', value: '5RI' },
  { position: 2, name: 'Square Footage', value: '686' },
  { position: 3, name: 'Number of Windows', value: '13' },
  { position: 4, name: 'Type of Windows', value: 'Double Pane Aluminum' },
  { position: 5, name: 'SqFt of Windows', value: '130' },
  { position: 6, name: 'Wall insulation value', value: 'R11' },
  { position: 7, name: 'Heating Source', value: 'Electric' },
  { position: 8, name: 'Exterior Doors', value: '1' },
  { position: 9, name: 'Stories', value: '1' },
  { position: 10, name: 'Electric Rate', value: '0.125' }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'value'];
  dataSource = HOME_DATA;
  uid = this.authService.userData.uid;
  fetchedHomeData;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    public dialog: MatDialog,
    public houseDBservice: HouseDBService
  ) {}

  ngOnInit(): void {
    this.houseDBservice.getHome().subscribe(res => {
      this.fetchedHomeData = res;
      console.log(this.fetchedHomeData);
    });
  }

  openLogoutModal() {
    const myModal = this.dialog.open(LogoutModalComponent);
  }
}
