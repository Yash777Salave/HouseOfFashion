package com.example.houseoffashion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.houseoffashion.model.BuyProduct;
import com.example.houseoffashion.service.BuyProductService;

@RestController
@RequestMapping("/api-buy")
public class BuyProductController {

	private BuyProductService buyProductService;
	
	@Autowired
    public BuyProductController(BuyProductService buyProductService) {
        this.buyProductService = buyProductService;
    }
	
	
	@PostMapping("/product")
	public BuyProduct saveProduct(@RequestBody BuyProduct product) {
		return buyProductService.saveProduct(product);
	}
	
	@GetMapping("/all-products")
	public List<BuyProduct> getAllBuyProduct(@RequestParam Long userId) {
		return buyProductService.getAllProducts(userId);
	}
}
