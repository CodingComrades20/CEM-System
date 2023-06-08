package com.codingcomrades.fullstackbackend.exception;

public class PurchaseNotFoundException extends RuntimeException {

    public PurchaseNotFoundException(Long id) {

        super("Could not found the user with id" + id);
    }
}
