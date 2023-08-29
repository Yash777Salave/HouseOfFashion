package com.example.houseoffashion.service;

import java.util.List;

import com.example.houseoffashion.model.KidClothes;

public interface KidClothesService {

	KidClothes saveKidClothes(KidClothes clothes);
	List<KidClothes> getClothesByType(String type);

}
