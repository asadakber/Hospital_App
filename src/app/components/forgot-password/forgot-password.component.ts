import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotForm: FormGroup
  constructor(private fb: FormBuilder,private authservice: AuthService) { }

  ngOnInit() {
    this.ForgotForm = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])]
    })
  }

  forgotpassword() {
    this.authservice.forgotPassword(this.ForgotForm.value)
    this.ForgotForm.reset();
  }

}
