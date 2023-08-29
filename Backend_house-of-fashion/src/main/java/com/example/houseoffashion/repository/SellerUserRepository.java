package com.example.houseoffashion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.houseoffashion.model.SellerUser;

@Repository
public interface SellerUserRepository extends JpaRepository<SellerUser, Long>  {

	@Query("SELECT bu FROM SellerUser bu WHERE bu.email = :email AND bu.password = :password")
	SellerUser getUserByEmailAndPassword(@Param("email") String email, @Param("password") String password);

	@Query("SELECT bu FROM SellerUser bu WHERE bu.id = :seller_id")
	SellerUser getUserInfo(@Param("seller_id") Long seller_id);
	
}
