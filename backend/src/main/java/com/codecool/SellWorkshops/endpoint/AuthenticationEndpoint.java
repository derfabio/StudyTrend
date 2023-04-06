package com.codecool.SellWorkshops.endpoint;

import com.codecool.SellWorkshops.entity.user.User;
import com.codecool.SellWorkshops.security.dto.RegisterRequest;
import com.codecool.SellWorkshops.service.securityService.AuthenticationService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authentication")
public class AuthenticationEndpoint {

    private final AuthenticationService authenticationService;

    public AuthenticationEndpoint(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        return authenticationService.register(request);
    }

    @PostMapping("/login")
    public String login(Authentication authentication) {
        return authenticationService.login(authentication);
    }

}