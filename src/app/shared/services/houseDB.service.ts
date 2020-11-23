import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AuthService } from '../services/auth.service';

import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HouseDBService {
  error = new Subject<string>();

  constructor(
    private db: AngularFireDatabase,
    public authService: AuthService
  ) {}

  createAndStoreHome(houseObject) {
    this.db
      .list('users/' + this.authService.userData.uid + '/homes')
      .push(houseObject);
  }

  getHome() {
    return this.db
      .list('users/' + this.authService.userData.uid + '/homes')
      .valueChanges();
  }
}
