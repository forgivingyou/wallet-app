import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../shared/services/user-registration.service';
import { User } from '../shared/models/user.model';
import { UserMoney } from '../shared/models/userMoney.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(private service: UserRegistrationService,private fb:FormBuilder, private router:Router) { 
    this.show=false;
  }

  user: User=this.service.user;
  userMoney:UserMoney=this.service.userMoney;
  show: boolean;

  deleteForm=this.fb.group({
    password:['',[Validators.required,Validators.minLength(4)]]
  });

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    gender: ['', Validators.required],
    age: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{2}$")]],
    aadharNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{12}$")]],
    panNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    mobileNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    userPin: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]]
  });


  ngOnInit() {
  }

  logOut(){
    this.service.loggedOut();
  }

  password() {
    this.show = !this.show;
  }

  delete(){
    if(this.deleteForm.controls.password.value==this.service.user.password){
      this.service.deleteAccount().subscribe(data=>{
        console.log(data);
        alert("We will miss you ..! 🥺");
        window.location.reload();
      });
      
    }
    else{
      alert("Wrong Password");
    }
    this.deleteForm.reset();
  }

  updateUser(){
    this.registerForm.setValue(this.service.user);
  }

  onSubmit() {
    this.service.updateUser(this.registerForm.value).subscribe(data=>{
      alert("Your Details Updated");
      this.service.getUserDetails(data);
    });
    
  }

}
