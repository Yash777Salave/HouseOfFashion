package com.example.houseoffashion.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.houseoffashion.model.BuyerUser;
import com.example.houseoffashion.repository.BuyerUserRepository;

@Service
public class BuyerUserServiceImpl implements BuyerUserService {

	@Autowired
	private BuyerUserRepository buyerUserRepository;

	@Override
	public BuyerUser saveUser(BuyerUser user) {
		return buyerUserRepository.save(user);
	}

	@Override
	public BuyerUser getIsUserPresent(String email, String password) {
		System.out.println(email+"************");
		System.out.println(password+"***********");
		return buyerUserRepository.getUserByEmailAndPassword(email, password);
		
	}



	
}
