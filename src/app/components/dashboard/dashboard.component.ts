import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  users: Observable<any>;
  public userId: string;
  isLoggedIn: boolean;
  loggedinUser: string;
  constructor(private authservice: AuthService, private route: ActivatedRoute) {
    this.users = this.authservice.getuserprofile().valueChanges()
   }

  ngOnInit() {
    this.authservice.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedinUser = auth.email
      } else {
        this.isLoggedIn = false
      }
    })

   
  }

  onSubmit() {
    this.authservice.signout();
  }

}
