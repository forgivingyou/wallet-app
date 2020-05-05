import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../shared/services/user-registration.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(private fb: FormBuilder,private router: Router, private service: UserRegistrationService) { }

  loginForm = this.fb.group({
    mobileNo: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password: ['',[Validators.required,Validators.minLength(4)]],
  });

  ngOnInit() {
  }

  onSubmit(){

    this.service.login(this.loginForm.controls.mobileNo.value,this.loginForm.controls.password.value).subscribe(data=>{
        this.service.getUserBalance(this.loginForm.controls.mobileNo.value).subscribe(data=>{
          this.service.showUserBalance(data);
        })
        this.router.navigateByUrl('/welcome');
        this.service.getUserDetails(data);
    },
      error=>{
        alert("Wrong Username or Password");
      })
  }

}
