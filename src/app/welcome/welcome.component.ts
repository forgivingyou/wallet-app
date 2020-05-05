import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../shared/services/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private service:UserRegistrationService,private router: Router) {
   }

  ngOnInit() {

    if(this.service.user==null){
      this.router.navigateByUrl("/user/login")
    }
  }

}
