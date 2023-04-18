package com.codingcomrades.fullstackbackend.repository;

import com.codingcomrades.fullstackbackend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
