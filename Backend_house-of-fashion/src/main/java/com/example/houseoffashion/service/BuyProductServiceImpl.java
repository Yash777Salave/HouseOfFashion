package com.example.houseoffashion.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.houseoffashion.model.BuyProduct;
import com.example.houseoffashion.repository.BuyProductRepository;

@Service
public class BuyProductServiceImpl  implements BuyProductService{

	@Autowired
	private BuyProductRepository buyProductRepository;
	
	@Override
	public BuyProduct saveProduct(BuyProduct product) {
		return buyProductRepository.save(product);
	}

	@Override
	public List<BuyProduct> getAllProducts(Long id) {
		return buyProductRepository.getClothesById(id);
	}

}
