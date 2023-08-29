package com.example.houseoffashion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.houseoffashion.model.KidClothes;
import com.example.houseoffashion.model.KidClothesPojo;
import com.example.houseoffashion.model.SellerUser;
import com.example.houseoffashion.model.WomenClothes;
import com.example.houseoffashion.model.WomenClothesPojo;
import com.example.houseoffashion.service.KidClothesService;
import com.example.houseoffashion.service.SellerUserService;

@RestController
@RequestMapping("/api-kid-clothes")
public class KidClothesController {

	private KidClothesService kidClothesService;

	private SellerUserService sellerUserService;
 	
	@Autowired
    public KidClothesController(KidClothesService kidClothesService,SellerUserService sellerUserService) {
        this.kidClothesService = kidClothesService;
        this.sellerUserService = sellerUserService;
    }
	
	@PostMapping("/save")
	public KidClothesPojo saveKidClothes(@RequestParam Long seller_id,@RequestBody KidClothes kidClothes) {
		
		SellerUser  seller = sellerUserService.findUserById(seller_id); // Retrieve the seller from the database

		KidClothes clothes = new KidClothes();
		clothes.setTitle(kidClothes.getTitle());
		clothes.setPrice(kidClothes.getPrice());
		clothes.setRating(kidClothes.getRating());
		clothes.setType(kidClothes.getType());
		clothes.setDescribe(kidClothes.getDescribe());
		clothes.setSeller_id(seller); // Associate the product with the seller
		KidClothes m= kidClothesService.saveKidClothes(clothes);

		KidClothesPojo dto = new KidClothesPojo();
		    dto.setTitle(m.getTitle());
		    dto.setPrice(m.getPrice());
		    dto.setRating(m.getRating());
		    dto.setType(m.getType());
		    dto.setDescribe(m.getDescribe());

		    return dto;
		
	}
	
	
	@GetMapping("/type-all")
	public List<KidClothes> getClothesByType(@RequestParam String type) {
		
		return kidClothesService.getClothesByType(type);

	}
}
