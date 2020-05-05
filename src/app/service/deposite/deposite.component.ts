import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRegistrationService } from 'src/app/shared/services/user-registration.service';
import { UserMoney } from 'src/app/shared/models/userMoney.model';
import { Transactions } from 'src/app/shared/models/transactions.model';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.scss']
})
export class DepositeComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: UserRegistrationService) { }

  userMoney: UserMoney = this.service.userMoney;
  curDate: Date = new Date();
  transaction: Transactions = new Transactions("", "", "", 0, this.curDate, 0);
  holderName: String = this.service.user.firstName + " " + this.service.user.lastName;

  walletFlag: boolean = false;
  bankFlag: boolean = false;

  ngOnInit() {
  }

  cardForm = this.fb.group({
    CardNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{16}$")]],
    Pin: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{4}$")]],
    HolderName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    Cvv: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{3}$")]],
    Month: ['', Validators.required],
    Year: ['', Validators.required]
  });

  depositeForm = this.fb.group({
    addThrough: ['', Validators.required],
    amount: ['', [Validators.required, Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]]
  });

  addMoney() {
    if(parseFloat(this.depositeForm.controls.amount.value)>=10000){
      alert("You Can add max. upto 10,000");
    }
    else if (this.walletFlag) {
      if (this.depositeForm.controls.addThrough.value == "JsutPay Bank") {
        if (this.validateCardDeatils() && parseFloat(this.depositeForm.controls.amount.value) < this.userMoney.bankBalance) {
          alert(this.depositeForm.controls.amount.value + " Credited to your Wallet");
          this.userMoney.walletBalance = this.userMoney.walletBalance + parseFloat(this.depositeForm.controls.amount.value);
          this.userMoney.bankBalance= this.userMoney.bankBalance - parseFloat(this.depositeForm.controls.amount.value);
          this.service.updateUserBalance(this.userMoney).subscribe(data => {
            console.log(data);
          });

          this.transaction.amount = parseFloat(this.depositeForm.controls.amount.value);
          this.transaction.mobileNo = this.service.user.mobileNo;
          this.transaction.transfereFrom = this.userMoney.mobileNo.toString();
          this.transaction.transfereTo = "Credit";
          this.transaction.type = "Credited to Wallet";
          this.service.saveTransactions(this.transaction).subscribe(data => {
            console.log(data);
          });
          this.depositeForm.reset();
        }
        else if (parseFloat(this.depositeForm.controls.amount.value) > this.userMoney.bankBalance) {
          alert("Your Bank Balance is low");
        }
        else {
          alert("Invalid Card Details");
        }
      }
      else {
        alert(this.depositeForm.controls.amount.value + " Credited to your Wallet");
        
        this.userMoney.walletBalance = this.userMoney.walletBalance + parseFloat(this.depositeForm.controls.amount.value);
        this.service.updateUserBalance(this.userMoney).subscribe(data => {
          console.log(data);
        });

        this.transaction.amount = parseFloat(this.depositeForm.controls.amount.value);
        this.transaction.mobileNo = this.service.user.mobileNo;
        this.transaction.transfereFrom = this.userMoney.mobileNo.toString();
        this.transaction.transfereTo = "Credit";
        this.transaction.type = "Credited to Wallet";
        this.service.saveTransactions(this.transaction).subscribe(data => {
          console.log(data);
        });
        this.depositeForm.reset();
      }
    }
    else if (this.bankFlag) {
      alert(this.depositeForm.controls.amount.value + " Credited to your Bank");
      
      this.userMoney.bankBalance = this.userMoney.bankBalance + parseFloat(this.depositeForm.controls.amount.value);
      this.service.updateUserBalance(this.userMoney).subscribe(data => {
        console.log(data);

      });
      this.transaction.amount = parseFloat(this.depositeForm.controls.amount.value);
      this.transaction.mobileNo = this.service.user.mobileNo;
      this.transaction.transfereFrom = this.userMoney.upi;
      this.transaction.transfereTo = "Credit";
      this.transaction.type = "Credited to Bank";
      this.service.saveTransactions(this.transaction).subscribe(data => {
        console.log(data);
      });
      this.depositeForm.reset();

    }
    this.cardForm.reset();

  }

  addMoneyInWallet() {
    this.walletFlag = true;
    this.bankFlag = false;
  }

  addMoneyInBank() {
    this.bankFlag = true;
    this.walletFlag = false;
  }

  validateCardDeatils() {
    if (this.cardForm.controls.CardNumber.value == this.userMoney.cardNo &&
      this.cardForm.controls.Cvv.value == this.userMoney.cvv &&
      this.cardForm.controls.Pin.value == this.userMoney.pin &&
      parseFloat(this.cardForm.controls.Month.value) == this.userMoney.month &&
      parseFloat(this.cardForm.controls.Year.value) == this.userMoney.year &&
      this.cardForm.controls.HolderName.value == this.holderName) {
      console.log(this.cardForm.value);
      return true;

    }
    return false;
  }


}
