package com.cg.wallet.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.exceptions.ResourceAlreadyExistException;
import com.cg.exceptions.ResourceNotFoundException;
import com.cg.wallet.entities.Transactions;
import com.cg.wallet.entities.User;
import com.cg.wallet.entities.UserMoney;
import com.cg.wallet.service.WalletServiceImpl;

@RestController
@CrossOrigin(origins="*", allowedHeaders="*")
public class WalletController {
	
	Logger logger= LoggerFactory.getLogger(WalletController.class);
	
	@Autowired
	private WalletServiceImpl walletServiceImpl;
	
	//mapping for user registration
	@PostMapping("/registerUser")
	public boolean registerUser(@RequestBody User newUser){
		logger.trace("at registerUser method");
		
		if(walletServiceImpl.registerUser(newUser)==false) {
			throw new ResourceNotFoundException("User with id : "+ newUser.getMobileNo() + " already exists");
		}
		return walletServiceImpl.registerUser(newUser);
	}
	
	//mapping for user login
	@GetMapping("/loginUser/{mobileNo}/{password}")
	public User loginUser(@PathVariable("mobileNo") long mobileNo, @PathVariable("password") String password) {
		
		logger.trace("at loginUser method");
		
		if(walletServiceImpl.loginUser(mobileNo, password)==null) {
			throw new ResourceNotFoundException("User not found with id :" + mobileNo);
		}
		return walletServiceImpl.loginUser(mobileNo, password);
	}
	
	//mapping to fetch user wallet and bank balance
	@GetMapping("/getUserBalance/{mobileNo}")
	public UserMoney getUserBalance(@PathVariable("mobileNo") long mobileNo) {
		
		logger.trace("at getUserBalance method");
		
		if(walletServiceImpl.getUserBalance(mobileNo)==null) {
			throw new ResourceNotFoundException("Wallet does not exist for user with id :" + mobileNo);
		}
		return walletServiceImpl.getUserBalance(mobileNo);
	}
	
	//mapping to get user bank balance
	@GetMapping("/getUserBankBalance/{upi}")
	public UserMoney getUserBankBalance(@PathVariable("upi") String upi) {
		
		logger.trace("at getUserBankBalance method");
		
		if(walletServiceImpl.getUserBankBalance(upi)==null) {
			throw new ResourceNotFoundException("Bank does not exist for user with UPI :" + upi);
		}
		return walletServiceImpl.getUserBankBalance(upi);
	}
	
	//mapping to update user wallet and bank balance after transaction
	@PutMapping("/updateUserBalance")
	public UserMoney updateUserBalance(@RequestBody UserMoney newUser){
		logger.trace("at updateUserBalance method");
		return walletServiceImpl.saveUserMoney(newUser);
	}
	
	//mapping to save transactions done by user
	@PostMapping("/saveTransactions")
	public boolean saveTransactions(@RequestBody Transactions transaction) {
		logger.trace("at saveTransactions method");
		return walletServiceImpl.saveTransactions(transaction);
	}
	
	//mapping to get all the transaction of a user
	@GetMapping("/getAllTransactions/{mobileNo}")
	public List<Transactions> getAllTransactions(@PathVariable("mobileNo") long mobileNo){
		logger.trace("at getAllTransactions method");
		return walletServiceImpl.getAllTransactions(mobileNo);
	}
	
	//mapping to delete user account
	@DeleteMapping("/deleteAccount/{mobileNo}")
	public int deleteAccount(@PathVariable("mobileNo") long mobileNo) {
		logger.trace("at deleteAccount method");
		return walletServiceImpl.deleteAccount(mobileNo);
	}
	
	//mapping to update user deatils
	@PutMapping("/updateUser")
	public User updateUser(@RequestBody User newUser) {
		
		logger.trace("at updateUser method");
		
		if(walletServiceImpl.updateUser(newUser)==null) {
			throw new ResourceNotFoundException("User not found with id :" + newUser.getMobileNo());
		}
		return walletServiceImpl.updateUser(newUser);
	}
}
