package com.example.houseoffashion.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.houseoffashion.model.KidClothes;
import com.example.houseoffashion.repository.KidClothesRepository;

@Service
public class KidClothesServiceImpl  implements KidClothesService{

	@Autowired
	private KidClothesRepository kidClothesRepository;

	@Override
	public KidClothes saveKidClothes(KidClothes clothes) {
		return kidClothesRepository.save(clothes);
	}

	@Override
	public List<KidClothes> getClothesByType(String type) {
		return kidClothesRepository.getClothesByType(type);
	}

}
