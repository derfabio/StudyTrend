package com.codecool.SellWorkshops.repository;

import com.codecool.SellWorkshops.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    Optional<Category> findCategoryByName(String category);

    Optional<Category> findCategoryById(long id);
}
