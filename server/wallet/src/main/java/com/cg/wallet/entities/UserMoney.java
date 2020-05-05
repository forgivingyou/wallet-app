package com.cg.wallet.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name= "user_money", catalog="users")
public class UserMoney {
	
	@Id
	private long mobileNo;
	private String upi,cardNo,cvv,pin;
	private int month,year;
	private double walletBalance,bankBalance;
	
	

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getUpi() {
		return upi;
	}

	public void setUpi(String upi) {
		this.upi = upi;
	}

	public double getWalletBalance() {
		return walletBalance;
	}

	public void setWalletBalance(double walletBalance) {
		this.walletBalance = walletBalance;
	}

	public double getBankBalance() {
		return bankBalance;
	}

	public void setBankBalance(double bankBalance) {
		this.bankBalance = bankBalance;
	}

	

	public UserMoney() {
		
	}

	public UserMoney(long mobileNo, String upi, String cardNo, String cvv, String pin, int month, int year,
			double walletBalance, double bankBalance) {
		super();
		this.mobileNo = mobileNo;
		this.upi = upi;
		this.cardNo = cardNo;
		this.cvv = cvv;
		this.pin = pin;
		this.month = month;
		this.year = year;
		this.walletBalance = walletBalance;
		this.bankBalance = bankBalance;
	}

	
	
	
	

}
