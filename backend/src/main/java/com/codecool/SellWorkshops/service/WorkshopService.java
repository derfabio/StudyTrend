package com.codecool.SellWorkshops.service;

import com.codecool.SellWorkshops.entity.Workshop;
import com.codecool.SellWorkshops.repository.WorkshopRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkshopService {
    private final WorkshopRepository workshopRepository;

    public WorkshopService(WorkshopRepository workshopRepository) {
        this.workshopRepository = workshopRepository;
    }

    public List<Workshop> getAllWorkshops() {
        return workshopRepository.findAll();
    }
}