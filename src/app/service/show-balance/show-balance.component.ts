import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/shared/services/user-registration.service';
import { UserMoney } from 'src/app/shared/models/userMoney.model';

@Component({
  selector: 'app-show-balance',
  templateUrl: './show-balance.component.html',
  styleUrls: ['./show-balance.component.scss']
})
export class ShowBalanceComponent implements OnInit {

  constructor(private service:UserRegistrationService) { }

  userMoney:UserMoney= this.service.userMoney;

  ngOnInit() {
  }

}
