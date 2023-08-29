package com.example.houseoffashion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.houseoffashion.model.BuyerUser;
import com.example.houseoffashion.model.SellerUser;
import com.example.houseoffashion.service.SellerUserService;

@RestController
@RequestMapping("/api-seller")
public class SellerUserController {

	private SellerUserService sellerUserService;
    
	@Autowired
    public SellerUserController(SellerUserService sellerUserService) {
        this.sellerUserService = sellerUserService;
    }
	
	@PostMapping("/user/save")
	public SellerUser saveUser( @RequestBody SellerUser sellerUser) {
		return sellerUserService.saveUser(sellerUser);
	}

	@PostMapping("/user/ispresent")
	public SellerUser getIsUserPresent (@RequestBody SellerUser sellerUser) {
		System.out.println("Control is here******");
		SellerUser user= sellerUserService.getIsUserPresent(sellerUser.getEmail(), sellerUser.getPassword());
		System.out.println(user+"&&&&&&&&");
		return user;
	}
	
	@GetMapping("/user_info")
	public SellerUser getUserInfo (@RequestParam("seller_id") Long seller_id) {
		System.out.println(seller_id+"*************");
		return sellerUserService.getUserInfo(seller_id);
	}
	
	
}
