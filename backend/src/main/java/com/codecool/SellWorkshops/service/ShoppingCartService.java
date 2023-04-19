package com.codecool.SellWorkshops.service;

import com.codecool.SellWorkshops.entity.ShoppingCart;
import com.codecool.SellWorkshops.entity.user.User;
import com.codecool.SellWorkshops.repository.ShoppingCartRepository;
import com.codecool.SellWorkshops.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ShoppingCartService {
    UserRepository userRepository;
    ShoppingCartRepository shoppingCartRepository;

    public ShoppingCartService(UserRepository userRepository, ShoppingCartRepository shoppingCartRepository) {
        this.userRepository = userRepository;
        this.shoppingCartRepository = shoppingCartRepository;
    }

    public ShoppingCart getShoppingCartByUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByUsername(auth.getName()).orElseThrow(() -> new UsernameNotFoundException("No user is logged in."));
        return user.getShoppingCart();
    }
}
