package com.example.houseoffashion.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.houseoffashion.model.MenCloths;
import com.example.houseoffashion.model.WomenClothes;
import com.example.houseoffashion.repository.WomenClothesRepository;

@Service
public class WomenClothesServiceImpl  implements WomenClothesService{

	@Autowired
	private WomenClothesRepository womenClothesRepository;
	
	@Override
	public WomenClothes saveWomenClothes(WomenClothes clothes) {
		return womenClothesRepository.save(clothes);
	}

	@Override
	public List<WomenClothes> getClothesByType(String type) {
		return womenClothesRepository.getClothesByType(type);
	}

}
