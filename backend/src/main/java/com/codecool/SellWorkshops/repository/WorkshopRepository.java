package com.codecool.SellWorkshops.repository;

import com.codecool.SellWorkshops.entity.Workshop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface WorkshopRepository extends JpaRepository<Workshop, Long> {
    List<Workshop> findWorkshopByDateOrderByDate(@Param("date") LocalDateTime localDateTime);
}
