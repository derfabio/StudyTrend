package com.codecool.SellWorkshops.runner;

import com.codecool.SellWorkshops.entity.Category;
import com.codecool.SellWorkshops.entity.Workshop;
import com.codecool.SellWorkshops.entity.user.Role;
import com.codecool.SellWorkshops.entity.user.User;
import com.codecool.SellWorkshops.repository.CategoryRepository;
import com.codecool.SellWorkshops.repository.UserRepository;
import com.codecool.SellWorkshops.repository.WorkshopRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.Set;

@Configuration
public class Initialization {
    private final UserRepository userRepository;
    private final WorkshopRepository workshopRepository;
    private final CategoryRepository categoryRepository;

    public Initialization(UserRepository userRepository, WorkshopRepository workshopRepository, CategoryRepository categoryRepository) {
        this.userRepository = userRepository;
        this.workshopRepository = workshopRepository;
        this.categoryRepository = categoryRepository;
    }

    @Bean
    ApplicationRunner runner(PasswordEncoder passwordEncoder) {
        return args -> {
            User user = new User("fabio", "fabio@gmail.com", passwordEncoder.encode("12345678"), Role.USER);
            userRepository.save(user);

            Category sports = new Category("Sports");
            Category communication = new Category("Communication");
            Category presentation = new Category("Presentation");
            Category java = new Category("Java Programming Language");
            categoryRepository.save(sports);
            categoryRepository.save(presentation);
            categoryRepository.save(communication);
            categoryRepository.save(java);


            /*
            Set<Category> workshop1Categories = new HashSet<>();
            workshop1Categories.add(communication);
            workshop1Categories.add(presentation);
            Set<Category> workshop2Categories = new HashSet<>();
            workshop2Categories.add(sports);
            workshop2Categories.add(communication);*/


            Workshop workshop1 = new Workshop("Communication - delivering bad news.", LocalDateTime.of(2023, Month.APRIL, 24, 10,30), 14.55, "Everybody knows it - telling bad news sucks balls. Whether in private life or in a professional context, the bearer of bad news always gets the shaft.", Set.of(communication, presentation));
            Workshop workshop2 = new Workshop("Backcountry Skiing - Technique and other essentials.", LocalDateTime.of(2023, Month.APRIL, 24, 10,30), 27.90, "Kickturn, shovel and furs - these and other terms will be explained and their importance brought to attention.", Set.of(sports));
            Workshop workshop3 = new Workshop("Recursive Java", LocalDateTime.of(2023, Month.APRIL, 27, 10,30), 2.0, "Important stuff", Set.of(java, presentation));
            workshopRepository.save(workshop1);
            workshopRepository.save(workshop2);
            workshopRepository.save(workshop3);
        };
    }
}
