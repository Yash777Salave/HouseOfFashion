package com.example.houseoffashion.service;

import java.util.List;

import com.example.houseoffashion.model.BuyProduct;

public interface BuyProductService {
		
	BuyProduct saveProduct(BuyProduct product);
	List<BuyProduct> getAllProducts(Long id);
}
