package com.codecool.SellWorkshops.endpoint;

import com.codecool.SellWorkshops.entity.user.User;
import com.codecool.SellWorkshops.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserEndpoint {
    private final UserService userService;

    public UserEndpoint(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/{username}")
    public User getUser(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }
}
