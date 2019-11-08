import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {

  constructor(private afs: AngularFirestore,private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    if(form.value.name === '') {
 
    }
    else {
      const value = form.value;
      const name = value.name;
      const email = value.email;
      const message = value.content;
      const subject = value.subject;
  
      let formRequest = { name, email, subject, message};
      this.db.list('/messages').push(formRequest);
      form.reset();

    }
   
  }

}
