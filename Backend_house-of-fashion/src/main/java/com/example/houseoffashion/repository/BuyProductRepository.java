package com.example.houseoffashion.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.houseoffashion.model.BuyProduct;

@Repository
public interface BuyProductRepository extends JpaRepository<BuyProduct,Long>{

    @Query("SELECT bu FROM BuyProduct bu WHERE bu.userId = :userId")
    List<BuyProduct> getClothesById(@Param("userId") Long userId);
}
