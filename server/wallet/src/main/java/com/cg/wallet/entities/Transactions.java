package com.cg.wallet.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="transactions", catalog="users")
public class Transactions {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long transactionId;
	
	private String transfereTo,transfereFrom,type;
	private int amount;
	private Date date;
	private long mobileNo;
	

	public Transactions() {
		
	}
	

	public Transactions(long transactionId, String transfereTo, String transfereFrom, String type, int amount,
			Date date,long mobileNo) {
		super();
		this.transactionId = transactionId;
		this.transfereTo = transfereTo;
		this.transfereFrom = transfereFrom;
		this.type = type;
		this.amount = amount;
		this.date = date;
		this.mobileNo=mobileNo;
	}

	
	public long getMobileNo() {
		return mobileNo;
	}


	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}


	public long getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(long transactionId) {
		this.transactionId = transactionId;
	}

	public String getTransfereTo() {
		return transfereTo;
	}

	public void setTransfereTo(String transfereTo) {
		this.transfereTo = transfereTo;
	}

	public String getTransfereFrom() {
		return transfereFrom;
	}

	public void setTransfereFrom(String transfereFrom) {
		this.transfereFrom = transfereFrom;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	
}
