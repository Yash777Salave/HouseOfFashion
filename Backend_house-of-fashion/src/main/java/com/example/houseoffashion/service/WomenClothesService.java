package com.example.houseoffashion.service;

import java.util.List;

import com.example.houseoffashion.model.WomenClothes;

public interface WomenClothesService {

	WomenClothes saveWomenClothes(WomenClothes clothes);
	List<WomenClothes> getClothesByType(String type);

}
