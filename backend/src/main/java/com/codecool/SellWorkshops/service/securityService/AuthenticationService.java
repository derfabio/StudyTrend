package com.codecool.SellWorkshops.service.securityService;

import com.codecool.SellWorkshops.entity.ShoppingCart;
import com.codecool.SellWorkshops.entity.user.Role;
import com.codecool.SellWorkshops.entity.user.User;
import com.codecool.SellWorkshops.repository.ShoppingCartRepository;
import com.codecool.SellWorkshops.repository.UserRepository;
import com.codecool.SellWorkshops.security.dto.RegisterRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class AuthenticationService {
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final ShoppingCartRepository shoppingCartRepository;

    public AuthenticationService(JwtService jwtService, PasswordEncoder passwordEncoder, UserRepository userRepository, ShoppingCartRepository shoppingCartRepository) {
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.shoppingCartRepository = shoppingCartRepository;
    }

    public User register(RegisterRequest request) {
        ShoppingCart shoppingCart = new ShoppingCart(Set.of());
        shoppingCartRepository.save(shoppingCart);
        var user = User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .shoppingCart(shoppingCart)
                .build();
        return userRepository.save(user);
    }

    public String login(Authentication authentication) {
        return jwtService.generateToken(authentication);
    }
}
