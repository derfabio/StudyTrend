package com.codecool.SellWorkshops.endpoint;

import com.codecool.SellWorkshops.entity.Category;
import com.codecool.SellWorkshops.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryEndpoint {
    private final CategoryService categoryService;

    @Autowired
    public CategoryEndpoint(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping(value = "/all")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    @GetMapping(value = "/{name}")
    public Category getCategoryByName(@PathVariable String name) {
        return categoryService.getCategoryByCategoryName(name);
    }

    @GetMapping(value = "/{id}")
    public Category getCategoryById(@PathVariable long id) {
        return categoryService.getCategoryById(id);
    }
}
