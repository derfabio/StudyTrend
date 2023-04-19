package com.codecool.SellWorkshops.entity;

import jakarta.persistence.*;
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
    @ManyToMany
    private Set<Category> categories;

    public Workshop(String title, LocalDateTime date, Double price, String description, Set<Category> categories) {
        this.title = title;
        this.date = date;
        this.price = price;
        this.description = description;
        this.categories = categories;
    }
}
