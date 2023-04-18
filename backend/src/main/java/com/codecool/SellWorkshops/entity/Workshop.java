package com.codecool.SellWorkshops.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Workshop {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private LocalDateTime date;
    private Double price;
    private String description;
    @OneToMany
    private Set<Category> categories;

    public Workshop(String title, LocalDateTime date, Double price, String description) {
        this.title = title;
        this.date = date;
        this.price = price;
        this.description = description;
    }
}
