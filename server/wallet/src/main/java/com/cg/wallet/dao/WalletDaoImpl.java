package com.cg.wallet.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.cg.wallet.entities.Transactions;
import com.cg.wallet.entities.User;
import com.cg.wallet.entities.UserMoney;

@Repository
public class WalletDaoImpl implements IWalletDao{
	
	@PersistenceContext
	private EntityManager em;
	
	
	//function to register user
	public boolean registerUser(User newUser) {
		User user= em.find(User.class, newUser.getMobileNo());
		if(user!=null) {
			return false;
		}
		em.persist(newUser);
		createAccount(newUser);
		return true;
		
	}
	
	//function to generate user details
	public void createAccount(User newUser) {
		long number=newUser.getMobileNo();
		String s=Long.toString(number);
		String pin=s.substring(s.length()-4);
		String cvv=s.substring(s.length()-3);
		String card="420010110007"+pin;
		UserMoney userMoney = new UserMoney(number, number+"@jpy", card, cvv, pin,10,25,0, 0);
		em.persist(userMoney);
	}
	
	//function of user login
	public User loginUser(long mobileNo, String password) {
		User user= em.find(User.class, mobileNo);
		
		String command="select u from User u where u.mobileNo=:mobileNo and u.password=:password";
		TypedQuery<User> query=em.createQuery(command, User.class);
		query.setParameter("mobileNo", mobileNo);
		query.setParameter("password", password);
		List<User> u= query.getResultList();
		if(u.size()==0)
		{
			return null;
		}
		return u.get(0);
	}
	
	//function to get user balance
	public UserMoney getUserBalance(long mobileNo) {
		
		String command="select um from UserMoney um where um.mobileNo=:mobileNo";
		TypedQuery<UserMoney> query = em.createQuery(command, UserMoney.class);
		query.setParameter("mobileNo", mobileNo);
		List<UserMoney> um= query.getResultList();
		if(um.size()==0) {
			return null;
		}
		return um.get(0);
		
	}
	
	//function to get user bank balance
	public UserMoney getUserBankBalance(String upi) {
		
		String command="select um from UserMoney um where um.upi=:upi";
		TypedQuery<UserMoney> query = em.createQuery(command, UserMoney.class);
		query.setParameter("upi", upi);
		List<UserMoney> um= query.getResultList();
		if(um.size()==0) {
			return null;
		}
		return um.get(0);
		
	}
	
	//function to search user wallet balance
	public UserMoney findUserMoneyById(long mobileNo){
		UserMoney um= em.find(UserMoney.class, mobileNo);
		return um;
	}
	
	//function to save user update balance
	public UserMoney saveUserMoney(UserMoney newUser) {
		UserMoney um=em.merge(newUser);
		newUser.setMobileNo(um.getMobileNo());
		return um;
	}
	
	//function to save user transaction
	public boolean saveTransactions(Transactions transaction) {
		em.persist(transaction);
		return true;
	}
	
	//function to get all transactions made by user
	public List<Transactions> getAllTransactions(long mobileNo){
		
		String command="select t from Transactions t where t.mobileNo=:mobileNo";
		TypedQuery<Transactions> query = em.createQuery(command, Transactions.class);
		query.setParameter("mobileNo", mobileNo);
		return query.getResultList();
	}
	
	//function to delete user account
	public int deleteAccount(long mobileNo) {
		User user=em.find(User.class, mobileNo);
		UserMoney um=em.find(UserMoney.class, mobileNo);
		Query query=em.createQuery("delete from Transactions t where t.mobileNo=:mobileNo");
		query.setParameter("mobileNo", mobileNo);
		int transCount=query.executeUpdate();
		em.remove(um);
		em.remove(user);
		return transCount;
	}
	
	//function to update user details
	public User updateUser(User newUser) {
		return em.merge(newUser);
	}
	

}
