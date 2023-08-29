package com.example.houseoffashion.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.houseoffashion.model.MenCloths;

@Repository
public interface MenClothesRepository extends JpaRepository<MenCloths,Long>{

    @Query("SELECT bu FROM MenCloths bu WHERE bu.type = :type")
    List<MenCloths> getClothesByType(@Param("type") String type);
}
