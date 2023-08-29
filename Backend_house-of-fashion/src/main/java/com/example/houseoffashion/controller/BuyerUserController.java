package com.example.houseoffashion.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.houseoffashion.model.BuyerUser;
import com.example.houseoffashion.service.BuyerUserService;

@RestController
@RequestMapping("/api")
public class BuyerUserController {

	private BuyerUserService buyerUserService;
    
	@Autowired
    public BuyerUserController(BuyerUserService buyerUserService) {
        this.buyerUserService = buyerUserService;
    }
	
	@PostMapping("/user/save")
	public BuyerUser saveUser( @RequestBody BuyerUser buyerUser) {
		return buyerUserService.saveUser(buyerUser);
	}
	
	@PostMapping("/user/ispresent")
	public BuyerUser getIsUserPresent (@RequestBody BuyerUser buyerUser) {
		return buyerUserService.getIsUserPresent(buyerUser.getEmail(), buyerUser.getPassword());
	}
	
}
