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
            Workshop workshop3 = new Workshop("Backcountry Skiing - Technique and other essentials.", LocalDateTime.of(2023, Month.APRIL, 24, 10,30), 27.90,
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n" +
                            "\n" +
                            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. ");

            workshopRepository.save(workshop1);
            workshopRepository.save(workshop2);
            workshopRepository.save(workshop3);
        };
    }
}
