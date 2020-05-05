import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { UserRegistrationService } from '../shared/services/user-registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;
  show: boolean;

  constructor(private fb: FormBuilder, private router: Router, private service: UserRegistrationService) {
    this.show = false;
  }

  password() {
    this.show = !this.show;
  }

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

  onSubmit() {
    this.service.register(this.registerForm.value).subscribe(data => {
        alert("JustSnap Welcomes You");
        this.router.navigateByUrl('/user/login');
    },
    error=>{
      alert("This mobile no. is already registered");
    });
    
  }


}
