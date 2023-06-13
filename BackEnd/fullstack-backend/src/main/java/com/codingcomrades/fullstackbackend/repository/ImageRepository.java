package com.codingcomrades.fullstackbackend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.*;

@Repository
public interface ImageRepository extends JpaRepository<com.codingcomrades.fullstackbackend.model.Image, Long> {
    <S extends com.codingcomrades.fullstackbackend.model.Image> S save(S image);
}
