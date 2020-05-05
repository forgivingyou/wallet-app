package com.cg.wallet.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.wallet.dao.WalletDaoImpl;
import com.cg.wallet.entities.Transactions;
import com.cg.wallet.entities.User;
import com.cg.wallet.entities.UserMoney;

@Service
@Transactional
public class WalletServiceImpl implements IWalletService {
	
	@Autowired
	private WalletDaoImpl walletDaoImpl;
	
	//register user service
	public boolean registerUser(User newUser) {
		return walletDaoImpl.registerUser(newUser);
	}

	//login user service
	public User loginUser(long mobileNo, String password) {
		return walletDaoImpl.loginUser(mobileNo, password);
	}
	
	//service to get user balance
	public UserMoney getUserBalance(long mobileNo) {
		return walletDaoImpl.getUserBalance(mobileNo);
	}
	
	//service to get user bank balance
	public UserMoney getUserBankBalance(String upi) {
		return walletDaoImpl.getUserBankBalance(upi);
	}
	
	//service to get user wallet balance
	public UserMoney findUserMoneyById(long mobileNo) {
		return walletDaoImpl.findUserMoneyById(mobileNo);
	}
	
	//service to save updated user balance
	public UserMoney saveUserMoney(UserMoney newUser) {
		return walletDaoImpl.saveUserMoney(newUser);
	}
	
	//service to save transations
	public boolean saveTransactions(Transactions transaction) {
		return walletDaoImpl.saveTransactions(transaction);
		
	}
	
	//service to retrieve all transactions
	public List<Transactions> getAllTransactions(long mobileNo){
		return walletDaoImpl.getAllTransactions(mobileNo);
	}
	
	//service to delete user account
	public int deleteAccount(long mobileNo) {
		return walletDaoImpl.deleteAccount(mobileNo);
	}
	
	//service to update user details
	public User updateUser(User newUser) {
		return walletDaoImpl.updateUser(newUser);
	}

}
