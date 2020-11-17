import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MustLoginComponent } from './must-login/must-login.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  showCheckMark = this.authService.isLoggedIn;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    public dialog: MatDialog
  ) {}

  isLoggedin() {
    if (this.authService.isLoggedIn === false) {
      this.dialog.open(MustLoginComponent);
    } else {
      return;
    }
  }
}
