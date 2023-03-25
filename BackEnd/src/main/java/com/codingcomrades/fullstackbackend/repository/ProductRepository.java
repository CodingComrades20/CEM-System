package com.codingcomrades.fullstackbackend.repository;

import com.codingcomrades.fullstackbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
