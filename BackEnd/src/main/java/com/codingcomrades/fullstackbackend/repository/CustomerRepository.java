package com.codingcomrades.fullstackbackend.repository;
import com.codingcomrades.fullstackbackend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
