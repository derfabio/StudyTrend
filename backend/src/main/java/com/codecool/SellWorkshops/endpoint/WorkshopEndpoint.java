package com.codecool.SellWorkshops.endpoint;

import com.codecool.SellWorkshops.entity.Workshop;
import com.codecool.SellWorkshops.service.WorkshopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/workshops")
public class WorkshopEndpoint {
    private final WorkshopService workshopService;

    @Autowired
    public WorkshopEndpoint(WorkshopService workshopService) {
        this.workshopService = workshopService;
    }

    @GetMapping(value = "/all")
    public List<Workshop> getAllWorkshops() {
        return workshopService.getAllWorkshops();
    }

    @GetMapping(value = "/{id}")
    public Optional<Workshop> getWorkshopById(@PathVariable Long id) {
        return workshopService.getWorkshopById(id);
    }
}