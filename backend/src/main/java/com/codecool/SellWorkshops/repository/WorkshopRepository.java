package com.codecool.SellWorkshops.repository;

import com.codecool.SellWorkshops.entity.Category;
import com.codecool.SellWorkshops.entity.Workshop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface WorkshopRepository extends JpaRepository<Workshop, Long> {
    List<Workshop> findWorkshopByDateOrderByDate(@Param("date") LocalDateTime localDateTime);

    Optional<Workshop> findWorkshopById(Long id);

    List<Workshop> findByCategoriesContaining(Category category);
}
