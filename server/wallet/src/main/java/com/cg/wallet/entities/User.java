package com.cg.wallet.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="User")
public class User {
	
	private String firstName,lastName;
	private String email,gender;
	private int age;
	private long aadharNo;
	private String panNo;
	
	@Id
	private long mobileNo;
	
	private String password;
	private int userPin;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="mobileNo", referencedColumnName="mobileNo")
	private UserMoney userMoney;
	

	public User() {
		
	}
	
	

	public User(String firstName, String lastName, String email, String gender, int age, long aadharNo, String panNo,
			long mobileNo, String password, int userPin, UserMoney userMoney) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.gender = gender;
		this.age = age;
		this.aadharNo = aadharNo;
		this.panNo = panNo;
		this.mobileNo = mobileNo;
		this.password = password;
		this.userPin = userPin;
		this.userMoney = userMoney;
	}



	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public long getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(long aadharNo) {
		this.aadharNo = aadharNo;
	}

	public String getPanNo() {
		return panNo;
	}

	public void setPanNo(String panNo) {
		this.panNo = panNo;
	}

	public long getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(long mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getUserPin() {
		return userPin;
	}

	public void setUserPin(int userPin) {
		this.userPin = userPin;
	}



	public UserMoney getUserMoney() {
		return userMoney;
	}

	public void setUserMoney(UserMoney userMoney) {
		this.userMoney = userMoney;
	}

	

}
