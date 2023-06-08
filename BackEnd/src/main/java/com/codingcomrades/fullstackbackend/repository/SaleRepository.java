package com.codingcomrades.fullstackbackend.repository;

import com.codingcomrades.fullstackbackend.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
