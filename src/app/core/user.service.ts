import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import * as firebase from 'firebase/app'

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: any) {
    this.db.object('/users' + user.uid).update({
      name: user.displayName,
      email: user.email,
      phone: user.phone
    })
  }
}
