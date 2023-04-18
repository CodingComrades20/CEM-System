package com.codingcomrades.fullstackbackend.repository;
import com.codingcomrades.fullstackbackend.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
public interface PaymentRepository extends JpaRepository<Payment,Long>{
}
