import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserMoney } from '../models/userMoney.model';
import { Transactions } from '../models/transactions.model';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  baseUrl : String = "http://localhost:9090/";

  user:User;
  userMoney:UserMoney;
  newUserMoney:UserMoney;
  curDate:Date=new Date();
  transaction:Transactions=new Transactions("","","",0,this.curDate,0);
  transactions: Array<Transactions>;

  constructor(private http:HttpClient, private router: Router) { }

  public register(user){
   // console.log(user);
    return this.http.post(this.baseUrl+"registerUser",user,{responseType: 'text' as 'json'});
  }

  public login(mobileNo: number, password: String ){
    return this.http.get(this.baseUrl+"loginUser/"+mobileNo+"/"+password);

  }

  public getUserDetails(userDetail:any){
    this.user=userDetail;
    console.log(this.user);
  }

  public loggedOut(){
    this.user=null;
    this.router.navigateByUrl("/user/login");
    console.log(this.user);
  }

  public getUserBalance(mobileNo){
    return this.http.get(this.baseUrl+"getUserBalance/"+mobileNo);
  }

  public getUserBankBalance(upi){
    return this.http.get(this.baseUrl+"getUserBankBalance/"+upi);
  }

  public showUserBalance(userMoney:any){
    this.userMoney=userMoney;
  }

  public showNewUserBalance(newUserMoney:any){
    this.newUserMoney=newUserMoney;
  }

  public doTransfereInWallet(money:any,newUserMoney:any){
    this.userMoney.walletBalance=this.userMoney.walletBalance-parseFloat(money);
   newUserMoney.walletBalance=newUserMoney.walletBalance+parseFloat(money);
    this.updateUserBalance(newUserMoney).subscribe(data=>{
      console.log(data);
    });
    this.updateUserBalance(this.userMoney).subscribe(data=>{
      console.log(data);
    });

    this.transaction.amount=parseFloat(money);
    this.transaction.mobileNo=this.user.mobileNo;
    this.transaction.transfereFrom= this.userMoney.mobileNo.toString();
    this.transaction.transfereTo=this.newUserMoney.mobileNo.toString();
    this.transaction.type="Wallet transfere";
    this.saveTransactions(this.transaction).subscribe(data=>{
      console.log(data);
    });

  }

  public doTransfereInBank(money:any,newUserMoney:any){
    this.userMoney.bankBalance=this.userMoney.bankBalance-parseFloat(money);
   newUserMoney.bankBalance=newUserMoney.bankBalance+parseFloat(money);
    this.updateUserBalance(newUserMoney).subscribe(data=>{
      console.log(data);
    });
    this.updateUserBalance(this.userMoney).subscribe(data=>{
      console.log(data);
    });

    this.transaction.amount=parseFloat(money);
    this.transaction.mobileNo=this.user.mobileNo;
    this.transaction.transfereFrom= this.userMoney.upi;
    this.transaction.transfereTo=this.newUserMoney.upi;
    this.transaction.type="Bank transfere";
    this.saveTransactions(this.transaction).subscribe(data=>{
      console.log(data);
    });

  }

  public transfereFromWalletInBank(money:any){
    this.userMoney.walletBalance=this.userMoney.walletBalance-parseFloat(money);
    this.userMoney.bankBalance=this.userMoney.bankBalance+parseFloat(money);
    console.log(this.userMoney.bankBalance);
    this.updateUserBalance(this.userMoney).subscribe(data=>{
      console.log(data);
    });
    
    this.transaction.amount=parseFloat(money);
    this.transaction.mobileNo=this.user.mobileNo;
    this.transaction.transfereFrom= this.user.mobileNo.toString();
    this.transaction.transfereTo=this.userMoney.upi;
    this.transaction.type="Self transfere";
    console.log(this.transaction);
    this.saveTransactions(this.transaction).subscribe(data=>{
      console.log(data);
    });

  }

  public updateUserBalance(newUser){
    return this.http.put(this.baseUrl+"updateUserBalance",newUser);
  }

  public saveTransactions(transaction){
    return this.http.post(this.baseUrl+"saveTransactions",transaction);
  }

  public getAllTransactions(){
    return this.http.get(this.baseUrl+"getAllTransactions/"+this.user.mobileNo)
  }

  public displayAllTransactions(transactions:any){
    this.transactions=transactions;
    console.log(this.transactions);
  }

  public deleteAccount(){
    return this.http.delete(this.baseUrl+"deleteAccount/"+this.user.mobileNo);
  }

  public updateUser(newUser){
    return this.http.put(this.baseUrl+"updateUser",newUser);
  }
  
}
