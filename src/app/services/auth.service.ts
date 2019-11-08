import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userId: string
  uid;

  UserList: AngularFireList<any>;
  constructor(private afs: AngularFirestore,private db: AngularFireDatabase,private router: Router,private afauth: AngularFireAuth) { 
    this.afauth.authState.subscribe(user => {
      this.userId = user.uid
    })
    

  }

  getUsers() {
    return this.afauth.authState.subscribe((user) => {
       if(user) {
        this.db.list(`/users/${user.uid}`).snapshotChanges(['child_added'])
        .subscribe(snap => {
          snap.forEach(snapshot => {
            if(snapshot.payload.val()['userType'] === "user") {
              this.router.navigate(['/dashboard'])
            } else {
              alert('Login Is Not Successfully')
            }
          })
        })
      }
    })
  }

    signin(user) {
      return this.afauth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((success) => {
        let adminuid = this.afauth.auth.currentUser.uid
        if(adminuid === "rcASbIx8KYXwGBVXRdo0iATvgFv2") {
          this.router.navigate(['/admin-dashboard'])
        } else {
          this.getUsers()
        }
   
      })
      .catch((error) => {
        alert(error)
      })
    }

  

    getAuth() {
      return this.afauth.authState.pipe(auth => auth)
    }

    signup(user) {
      return this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((success) => {
        let uid = this.afauth.auth.currentUser.uid
        this.db.list(`/users/${uid}`).push({
          userType: user.userType,
          username: user.username,
          email: user.email,
          password: user.password
        })
        this.router.navigate(['/login'])
      })
      .catch((error) => {
        alert(error)
      })
    }

    signout() {
      return this.afauth.auth.signOut()
      .then((success) => {
        this.router.navigate(['/login'])
      })
      .catch((error) => {
        alert(error)
      })
    }

    forgotPassword(user) {
      return this.afauth.auth.sendPasswordResetEmail(user.email)
      .then((success) => {
        alert('msg Has Been Sent')
      })
      .catch((error) => {
        alert('msg Has Not Been Sent')
      })
    }

    getuserprofile(): AngularFireObject<any> {
      return this.db.object(`/users/${this.userId}`)
    }
}
