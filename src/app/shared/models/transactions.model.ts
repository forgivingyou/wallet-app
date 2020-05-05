export class Transactions{
    transfereTo:String;
    transfereFrom:String;
    type:String;
    amount:number;
	date:Date;
    mobileNo:number;
    
    constructor(transfereTo:String,
        transfereFrom:String,
        type:String,
        amount:number,
        date:Date,
        mobileNo:number,){
            this.transfereTo=transfereTo;
            this.transfereFrom=transfereFrom;
            this.type=type;
            this.amount=amount;
            this.date=date;
            this.mobileNo=mobileNo;
        }
}