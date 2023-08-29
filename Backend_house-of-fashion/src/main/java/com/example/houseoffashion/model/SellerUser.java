package com.example.houseoffashion.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class SellerUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "phone_no")
	private long phone_no;
	
	@Column(name = "password")
	private String password;
	
	@OneToMany(mappedBy = "seller_id", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnore
	private List<MenCloths> products;
	
	public SellerUser() {
		
	}

	
	public SellerUser(Long id, String name, String email, long phone_no, String password, List<MenCloths> products) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone_no = phone_no;
		this.password = password;
		this.products = products;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone_no() {
		return phone_no;
	}

	public void setPhone_no(long phone_no) {
		this.phone_no = phone_no;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<MenCloths> getProducts() {
		return products;
	}

	public void setProducts(List<MenCloths> products) {
		this.products = products;
	}


	@Override
	public String toString() {
		return "SellerUser [id=" + id + ", name=" + name + ", email=" + email + ", phone_no=" + phone_no + ", password="
				+ password + ", products="  + "]";
	}

	
}
