package com.codingcomrades.fullstackbackend.exception;

public class SupplierNotFoundException extends RuntimeException {

    public SupplierNotFoundException(Long id) {

        super("Could not found the user with id " + id);
    }

}
