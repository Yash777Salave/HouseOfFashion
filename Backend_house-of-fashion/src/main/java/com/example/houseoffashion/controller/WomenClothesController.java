package com.example.houseoffashion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.houseoffashion.model.MenClothesPojo;
import com.example.houseoffashion.model.MenCloths;
import com.example.houseoffashion.model.SellerUser;
import com.example.houseoffashion.model.WomenClothes;
import com.example.houseoffashion.model.WomenClothesPojo;
import com.example.houseoffashion.service.SellerUserService;
import com.example.houseoffashion.service.WomenClothesService;

@RestController
@RequestMapping("/api-women-clothes")
public class WomenClothesController {


	private WomenClothesService womenClothesService;
	private SellerUserService sellerUserService;

 	
	@Autowired
    public WomenClothesController(WomenClothesService womenClothesService,SellerUserService sellerUserService) {
        this.womenClothesService= womenClothesService;
        this.sellerUserService=sellerUserService;
    }

	@PostMapping("/save")
	public WomenClothesPojo saveWomenClothes(@RequestParam Long seller_id,@RequestBody WomenClothes womenClothes) {
		
		SellerUser  seller = sellerUserService.findUserById(seller_id); // Retrieve the seller from the database

		WomenClothes clothes = new WomenClothes();
		clothes.setTitle(womenClothes.getTitle());
		clothes.setPrice(womenClothes.getPrice());
		clothes.setRating(womenClothes.getRating());
		clothes.setType(womenClothes.getType());
		clothes.setDescribe(womenClothes.getDescribe());
		clothes.setSeller_id(seller); // Associate the product with the seller
		WomenClothes m= womenClothesService.saveWomenClothes(clothes);

		WomenClothesPojo dto = new WomenClothesPojo();
		    dto.setTitle(m.getTitle());
		    dto.setPrice(m.getPrice());
		    dto.setRating(m.getRating());
		    dto.setType(m.getType());
		    dto.setDescribe(m.getDescribe());

		    return dto;
	}
	
	
	@GetMapping("/type-all")
	public List<WomenClothes> getClothesByType(@RequestParam String type) {
		
		return womenClothesService.getClothesByType(type);

	}
	
}
