package com.example.houseoffashion.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.houseoffashion.model.MenCloths;
import com.example.houseoffashion.repository.MenClothesRepository;

@Service
public class MenClothesServiceImpl implements MenClothesService {

	@Autowired
	private MenClothesRepository menClothesRepository;
	
	@Override
	public MenCloths saveMenClothes(MenCloths clothes) {
		return menClothesRepository.save(clothes);
	}

	@Override
	public List<MenCloths> getClothesByType(String type) {
		return menClothesRepository.getClothesByType(type);
	}

	

}
