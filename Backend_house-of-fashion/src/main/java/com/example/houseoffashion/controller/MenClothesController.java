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
import com.example.houseoffashion.repository.SellerUserRepository;
import com.example.houseoffashion.service.MenClothesService;
import com.example.houseoffashion.service.SellerUserService;


@RestController
@RequestMapping("/api-mens-clothes")
public class MenClothesController {
	
	private MenClothesService menClothesService;

	private SellerUserService sellerUserService;
 	
	@Autowired
    public MenClothesController(MenClothesService menClothesService,SellerUserService sellerUserService) {
        this.menClothesService = menClothesService;
        this.sellerUserService = sellerUserService;
    }
	

	@PostMapping("/t-shirt/save")
	public MenClothesPojo saveMenCloths(@RequestParam Long seller_id, @RequestBody MenCloths menCloths) {

		SellerUser  seller = sellerUserService.findUserById(seller_id); // Retrieve the seller from the database

		MenCloths clothes = new MenCloths();
		clothes.setTitle(menCloths.getTitle());
		clothes.setPrice(menCloths.getPrice());
		clothes.setRating(menCloths.getRating());
		clothes.setType(menCloths.getType());
		clothes.setDescribe(menCloths.getDescribe());
		clothes.setSeller_id(seller); // Associate the product with the seller
		MenCloths m= menClothesService.saveMenClothes(clothes);

		MenClothesPojo dto = new MenClothesPojo();
		    dto.setTitle(m.getTitle());
		    dto.setPrice(m.getPrice());
		    dto.setRating(m.getRating());
		    dto.setType(m.getType());
		    dto.setDescribe(m.getDescribe());

		    return dto;
	}
	
	
	@GetMapping("/type-all")
	public List<MenCloths> getClothesByType(@RequestParam String type) {
		
		return menClothesService.getClothesByType(type);

	}
	
}
