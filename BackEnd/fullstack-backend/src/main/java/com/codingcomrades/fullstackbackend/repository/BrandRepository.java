package com.codingcomrades.fullstackbackend.repository;


import com.codingcomrades.fullstackbackend.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand,Long> {
}
