package com.example.houseoffashion.service;

import java.util.List;

import com.example.houseoffashion.model.MenCloths;

public interface MenClothesService {

	MenCloths saveMenClothes(MenCloths clothes);
	List<MenCloths> getClothesByType(String type);


}
