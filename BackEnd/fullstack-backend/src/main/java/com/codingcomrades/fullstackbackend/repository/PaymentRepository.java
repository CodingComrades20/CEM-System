package com.codingcomrades.fullstackbackend.repository;
import com.codingcomrades.fullstackbackend.model.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

//public interface PaymentRepository extends JpaRepository<Payment,Long>{
//
//    List<Payment> findByStatusAndDueDateBefore(String status, Date date);
//}
@Repository // If using a repository class
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Payment findById(long id);
}

