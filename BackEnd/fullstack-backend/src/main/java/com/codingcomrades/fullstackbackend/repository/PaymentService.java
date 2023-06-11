package com.codingcomrades.fullstackbackend.repository;

import com.codingcomrades.fullstackbackend.model.Payment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // If using a service class
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public Payment getPaymentById(long id) {
        return paymentRepository.findById(id);
    }
}
