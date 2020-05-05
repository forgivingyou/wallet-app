import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/shared/services/user-registration.service';
import { Transactions } from 'src/app/shared/models/transactions.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(private service:UserRegistrationService) { }

  show:boolean;


  ngOnInit() {

    this.service.getAllTransactions().subscribe(data=>{
      if(data==0){
        this.show=true;
      }
      else{
        this.show=false;
      }
      this.service.displayAllTransactions(data);
      
     
    })

  }

}
