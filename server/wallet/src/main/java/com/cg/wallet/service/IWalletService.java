package com.cg.wallet.service;

import java.util.List;

import com.cg.wallet.entities.Transactions;
import com.cg.wallet.entities.User;
import com.cg.wallet.entities.UserMoney;

//interface of service class
public interface IWalletService {
	
public abstract boolean registerUser(User newUser);
	
	public abstract User loginUser(long mobileNo, String password);
	
	public abstract UserMoney getUserBalance(long mobileNo);
	
	public abstract UserMoney getUserBankBalance(String upi);
	
	public abstract UserMoney findUserMoneyById(long mobileNo);
	
	public abstract UserMoney saveUserMoney(UserMoney newUser);
	
	public abstract boolean saveTransactions(Transactions transaction);
	
	public abstract List<Transactions> getAllTransactions(long mobileNo);
	
	public abstract int deleteAccount(long mobileNo);
	
	public abstract  User updateUser(User newUser);

}
