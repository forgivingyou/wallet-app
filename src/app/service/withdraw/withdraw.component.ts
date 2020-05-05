import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationService } from 'src/app/shared/services/user-registration.service';
import { UserMoney } from 'src/app/shared/models/userMoney.model';
import { Transactions } from 'src/app/shared/models/transactions.model';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:UserRegistrationService) { }

  userMoney:UserMoney=this.service.userMoney;
  curDate:Date=new Date();
  transaction:Transactions=new Transactions("","","",0,this.curDate,0);

  ngOnInit() {
  }

  withdrawForm = this.fb.group({
    justPayPin: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]],
    amount: ['',[Validators.required,Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]]
  });

  withdrawFromWallet(){

    if(this.service.userMoney.walletBalance < parseFloat(this.withdrawForm.controls.amount.value)){
      alert("Your Wallet Balance is low");
    }
    else if(parseFloat(this.withdrawForm.controls.justPayPin.value)==this.service.user.userPin){
      alert(this.withdrawForm.controls.amount.value + " Debited from your Wallet");
      this.userMoney.walletBalance=this.userMoney.walletBalance-parseFloat(this.withdrawForm.controls.amount.value);
      this.service.updateUserBalance(this.userMoney).subscribe(data=>{
        console.log(data);
        
      });
      this.transaction.amount=parseFloat(this.withdrawForm.controls.amount.value);
      this.transaction.mobileNo=this.service.user.mobileNo;
      this.transaction.transfereFrom= this.userMoney.mobileNo.toString();
      this.transaction.transfereTo="Debit";
      this.transaction.type="Debited from Wallet";
      this.service.saveTransactions(this.transaction).subscribe(data=>{
      console.log(data);
    });
    }
    else{
      alert("Incorrect pin");
    }
    this.withdrawForm.reset();
  }
  withdrawFromBank(){
    if(this.service.userMoney.bankBalance < parseFloat(this.withdrawForm.controls.amount.value)){
      alert("Your Bank Balance is low");
    }
    else if(parseFloat(this.withdrawForm.controls.justPayPin.value)==this.service.user.userPin){
      alert(this.withdrawForm.controls.amount.value + " Debited from your Bank");
      this.userMoney.bankBalance=this.userMoney.bankBalance-parseFloat(this.withdrawForm.controls.amount.value);
      this.service.updateUserBalance(this.userMoney).subscribe(data=>{
        console.log(data);
        
      });
      this.transaction.amount=parseFloat(this.withdrawForm.controls.amount.value);
      this.transaction.mobileNo=this.service.user.mobileNo;
      this.transaction.transfereFrom= this.userMoney.upi;
      this.transaction.transfereTo="Debit";
      this.transaction.type="Debited from Bank";
      this.service.saveTransactions(this.transaction).subscribe(data=>{
      console.log(data);
    });
    }
    else{
      alert("Incorrect pin");
    }
    this.withdrawForm.reset();
  }

}
