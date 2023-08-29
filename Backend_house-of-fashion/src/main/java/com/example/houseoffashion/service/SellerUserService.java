package com.example.houseoffashion.service;

import com.example.houseoffashion.model.BuyerUser;
import com.example.houseoffashion.model.SellerUser;

public interface SellerUserService {

	SellerUser saveUser(SellerUser user);
	SellerUser findUserById(Long id);
	SellerUser getIsUserPresent(String email ,String password);
	SellerUser getUserInfo(Long seller_id);



}
