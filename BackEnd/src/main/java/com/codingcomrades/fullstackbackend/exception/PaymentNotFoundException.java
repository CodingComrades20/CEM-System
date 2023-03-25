package com.codingcomrades.fullstackbackend.exception;
public class PaymentNotFoundException extends RuntimeException {
    public PaymentNotFoundException(Long id) {
        super("Could not found the product with id" + id);

    }

}