package com.example.houseoffashion.service;

import com.example.houseoffashion.model.BuyerUser;

public interface BuyerUserService {
	
	BuyerUser saveUser(BuyerUser user);
	BuyerUser getIsUserPresent(String email ,String password);

}
