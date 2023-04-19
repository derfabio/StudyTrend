package com.codecool.SellWorkshops.service;

import com.codecool.SellWorkshops.entity.Category;
import com.codecool.SellWorkshops.entity.Workshop;
import com.codecool.SellWorkshops.repository.WorkshopRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkshopService {
    private final WorkshopRepository workshopRepository;
    private final CategoryService categoryService;

    public WorkshopService(WorkshopRepository workshopRepository, CategoryService categoryService) {
        this.workshopRepository = workshopRepository;
        this.categoryService = categoryService;
    }

    public List<Workshop> getAllWorkshops() {
        return workshopRepository.findAll();
    }

    public Optional<Workshop> getWorkshopById(Long id) {
        return workshopRepository.findWorkshopById(id);
    }

    public List<Workshop> getWorkshopsByCategoryId(long id) {
        Category categoryObject = categoryService.getCategoryById(id);
        return workshopRepository.findByCategoriesContaining(categoryObject);
    }
}