package com.example.houseoffashion.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.houseoffashion.model.KidClothes;

@Repository
public interface KidClothesRepository extends JpaRepository<KidClothes,Long>{

    @Query("SELECT bu FROM KidClothes bu WHERE bu.type = :type")
    List<KidClothes> getClothesByType(@Param("type") String type);
}
