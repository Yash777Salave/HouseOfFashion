package com.example.houseoffashion.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="women_clothing")
public class WomenClothes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "price")
	private float price;
	
	@Column(name = "rating")
	private int rating;
	
	@Column(name="type")
	private String type;
	
	@Column(name="description ",length = 1000 )
	private String describe; 

	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "seller_id", referencedColumnName = "id")
	@JsonIgnore
	private SellerUser seller_id;
	
	public WomenClothes() {
		
	}

	public WomenClothes(Long id, String title, float price, int rating, String type, String describe,
			SellerUser seller_id) {
		super();
		this.id = id;
		this.title = title;
		this.price = price;
		this.rating = rating;
		this.type = type;
		this.describe = describe;
		this.seller_id = seller_id;
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

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescribe() {
		return describe;
	}

	public void setDescribe(String describe) {
		this.describe = describe;
	}

	public SellerUser getSeller_id() {
		return seller_id;
	}

	public void setSeller_id(SellerUser seller_id) {
		this.seller_id = seller_id;
	}
	
	
}
