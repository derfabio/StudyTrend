package com.codecool.SellWorkshops.runner;

import com.codecool.SellWorkshops.entity.Workshop;
import com.codecool.SellWorkshops.entity.user.Role;
import com.codecool.SellWorkshops.entity.user.User;
import com.codecool.SellWorkshops.repository.UserRepository;
import com.codecool.SellWorkshops.repository.WorkshopRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.time.Month;

@Configuration
public class Initialization {
    private final UserRepository userRepository;

    public Initialization(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    ApplicationRunner runner(WorkshopRepository workshopRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            User user = new User(1L, "fabio", "fabio@gmail.com", passwordEncoder.encode("12345678"), Role.USER);
            userRepository.save(user);

            Workshop workshop1 = new Workshop("Communication - delivering bad news.", LocalDateTime.of(2023, Month.APRIL, 24, 10,30), 14.55, "Everybody knows it - telling bad news sucks balls. Whether in private life or in a professional context, the bearer of bad news always gets the shaft.");
            Workshop workshop2 = new Workshop("Backcountry Skiing - Technique and other essentials.", LocalDateTime.of(2023, Month.APRIL, 24, 10,30), 27.90, "Kickturn, shovel and furs - these and other terms will be explained and their importance brought to attention. ");

            workshopRepository.save(workshop1);
            workshopRepository.save(workshop2);
        };
    }
}
