package com.example.houseoffashion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.houseoffashion.model.BuyerUser;

@Repository
public interface BuyerUserRepository extends JpaRepository<BuyerUser, Long> {

	  
    @Query("SELECT bu FROM BuyerUser bu WHERE bu.email = :email AND bu.password = :password")
    BuyerUser getUserByEmailAndPassword(@Param("email") String email, @Param("password") String password);
	
}
