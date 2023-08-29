package com.example.houseoffashion.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.houseoffashion.model.WomenClothes;

@Repository
public interface WomenClothesRepository extends JpaRepository<WomenClothes,Long>{

    @Query("SELECT bu FROM WomenClothes bu WHERE bu.type = :type")
    List<WomenClothes> getClothesByType(@Param("type") String type);
}
