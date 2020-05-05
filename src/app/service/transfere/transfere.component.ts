import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/shared/services/user-registration.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transfere',
  templateUrl: './transfere.component.html',
  styleUrls: ['./transfere.component.scss']
})
export class TransfereComponent implements OnInit {

  constructor(private service:UserRegistrationService, private fb:FormBuilder) { }

  

  transfereForm= this.fb.group({
    justPayPin: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]],
    mobileNo: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    amount: ['',[Validators.required,Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]],
    upi: ['',[Validators.required,Validators.minLength(14),Validators.maxLength(14)]]
  });

  transfereInWallet(){
    if(this.service.userMoney.walletBalance < parseFloat(this.transfereForm.controls.amount.value)){
      alert("Your Wallet Balance is low");
    }
    else if(parseFloat(this.transfereForm.controls.justPayPin.value) == this.service.user.userPin)
    {
      alert(this.transfereForm.controls.amount.value+" Transfered");
      this.service.getUserBalance(this.transfereForm.controls.mobileNo.value).subscribe(data=>{
        this.service.showNewUserBalance(data);
        this.service.doTransfereInWallet( parseFloat(this.transfereForm.controls.amount.value),data);
        
      });
    }
    else{
      alert("Incorrect Pin")
    }
   
  }

  transfereInBank(){
    if(this.service.userMoney.bankBalance < parseFloat(this.transfereForm.controls.amount.value)){
      alert("Your Bank Balance is low");
    }
    else if(parseFloat(this.transfereForm.controls.justPayPin.value) == this.service.user.userPin)
    {
      alert(this.transfereForm.controls.amount.value+" Transfered");
      this.service.getUserBankBalance(this.transfereForm.controls.upi.value).subscribe(data=>{
        this.service.showNewUserBalance(data);
        this.service.doTransfereInBank( parseFloat(this.transfereForm.controls.amount.value),data);
        
      });
    }
    else{
      alert("Incorrect Pin")
    }
    

  }

  transfereFromWalletInBank(){
    if(this.service.userMoney.walletBalance < parseFloat(this.transfereForm.controls.amount.value)){
      alert("Your Wallet Balance is low");
    }
    else if(parseFloat(this.transfereForm.controls.justPayPin.value) == this.service.user.userPin)
    {
      alert(this.transfereForm.controls.amount.value+" Transfered");
      this.service.transfereFromWalletInBank( parseFloat(this.transfereForm.controls.amount.value));
      
    }
    else{
      alert("Incorrect Pin")
    }
   
  }


  ngOnInit() {
  }

}
