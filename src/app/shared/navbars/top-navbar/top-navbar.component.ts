import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../../services/user-registration.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor(private router: Router,private service:UserRegistrationService) { }

  ngOnInit() {
  }

  logOut(){
    this.service.loggedOut();
    //this.router.navigateByUrl("/user/login")
  }

}
