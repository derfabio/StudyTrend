package com.codecool.SellWorkshops.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class ShoppingCart {
    @Id
    @GeneratedValue
    private Long id;
    @OneToMany
    private Set<Workshop> workshops;

    public ShoppingCart(Set<Workshop> workshops) {
        this.workshops = workshops;
    }
}
