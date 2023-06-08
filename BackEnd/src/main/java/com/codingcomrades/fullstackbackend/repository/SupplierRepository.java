package com.codingcomrades.fullstackbackend.repository;

import com.codingcomrades.fullstackbackend.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
