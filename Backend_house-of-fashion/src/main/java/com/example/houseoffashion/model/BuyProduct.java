package com.example.houseoffashion.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="buy_product")
public class BuyProduct {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "price")
	private float price;
	
	@Column(name="description ",length = 1000 )
	private String describe; 

	@Column(name="address ",length = 1000 )
	private String address;
	
	
	@Column(name = "shipDate")
	private String shipDate;
	
	@Column(name = "userId")
	private Long userId;
	
	public BuyProduct() {
		
	}

	

	public BuyProduct(Long id, String title, float price, String describe, String address, String shipDate,
			Long userId) {
		super();
		this.id = id;
		this.title = title;
		this.price = price;
		this.describe = describe;
		this.address = address;
		this.shipDate = shipDate;
		this.userId = userId;
	}



	public Long getUserId() {
		return userId;
	}



	public void setUserId(Long userId) {
		this.userId = userId;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getDescribe() {
		return describe;
	}

	public void setDescribe(String describe) {
		this.describe = describe;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getShipDate() {
		return shipDate;
	}

	public void setShipDate(String shipDate) {
		this.shipDate = shipDate;
	}
	
	
	
}
