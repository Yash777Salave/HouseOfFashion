package com.example.houseoffashion.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.houseoffashion.model.BuyerUser;
import com.example.houseoffashion.model.SellerUser;
import com.example.houseoffashion.repository.SellerUserRepository;

@Service
public class SellerUserServiceImpl implements SellerUserService {

	@Autowired
	private SellerUserRepository sellerUserRepository;

	@Override
	public SellerUser saveUser(SellerUser user) {
		return sellerUserRepository.save(user);
	}

	@Override
	public SellerUser getIsUserPresent(String email, String password) {
		return sellerUserRepository.getUserByEmailAndPassword(email, password);
	}

	@Override
	public SellerUser findUserById(Long id) {

		System.out.println(id+"in service id *******");
		return sellerUserRepository.getById(id);
	}

	@Override
	public SellerUser getUserInfo(Long seller_id) {
		return sellerUserRepository.getUserInfo(seller_id);
	}


}
