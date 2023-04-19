package com.codecool.SellWorkshops.endpoint;

import com.codecool.SellWorkshops.entity.Workshop;
import com.codecool.SellWorkshops.service.ShoppingCartService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/shopping-cart")
public class ShoppingCartEndpoint {
    private final ShoppingCartService shoppingCartService;

    public ShoppingCartEndpoint(ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }

    @GetMapping(value = "/contents")
    public Set<Workshop> getShoppingCartContentForLoggedInUser() {
        return shoppingCartService.getShoppingCartByUser().getWorkshops();
    }
}
