package com.codecool.SellWorkshops.repository;

import com.codecool.SellWorkshops.entity.ShoppingCart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long>{
}
