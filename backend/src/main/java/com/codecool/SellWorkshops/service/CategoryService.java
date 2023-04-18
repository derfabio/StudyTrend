package com.codecool.SellWorkshops.service;

import com.codecool.SellWorkshops.entity.Category;
import com.codecool.SellWorkshops.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    public Category getCategoryByCategoryName(String category) {
        return categoryRepository.findCategoryByName(category).orElseThrow(() -> new RuntimeException("This category does not exist (yet)!"));
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
}
