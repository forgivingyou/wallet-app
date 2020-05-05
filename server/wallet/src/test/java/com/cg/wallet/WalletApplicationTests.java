package com.cg.wallet;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.event.annotation.AfterTestClass;
import org.springframework.test.context.event.annotation.BeforeTestClass;

import com.cg.wallet.dao.IWalletDao;
import com.cg.wallet.dao.WalletDaoImpl;
import com.cg.wallet.entities.User;
import com.cg.wallet.entities.UserMoney;

@SpringBootTest
class WalletApplicationTests {
	
	private static IWalletDao walletDao;
	UserMoney userMoney = new UserMoney(818200185, 818200185+"@jpy", "4569874569874563", "456", "1547",10,25,0, 0);
	User user=new User("sid", "sid", "sid@gmail.com", "male", 24, 1231555555, "ASDF458632",
		818200185, "1011", 123321,userMoney);
	
	@BeforeTestClass
	public static void intialize() {
		walletDao=new WalletDaoImpl();
	}

	//testing user registration funtion
	@Test
	public void testRegisterUser() {
		assertEquals(true,walletDao.registerUser(user)); 
	}
	
	//testing user login function
	@Test
	public void testLogin() {
		assertEquals(user,walletDao.loginUser(818200185, "1011"));
	}
	
	//testing function which returns user balance details
	@Test
	public void testGetUserBalance(){
		assertEquals(userMoney,walletDao.getUserBalance(818200185));
	}
	
	//testing user's bank balance function
	@Test
	public void testGetUserBankBalance() {
		assertEquals(null,walletDao.getUserBankBalance("8182001851@jpy"));
	}
	
	@AfterTestClass
	public static void close() {
		System.out.println("Cleaning up the code");
		walletDao=null;
	}

}
