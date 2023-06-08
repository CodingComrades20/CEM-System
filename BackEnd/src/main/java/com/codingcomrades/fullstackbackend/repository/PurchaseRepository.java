package com.codingcomrades.fullstackbackend.repository;

import com.codingcomrades.fullstackbackend.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
}
