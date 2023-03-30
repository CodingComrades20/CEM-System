package com.codingcomrades.fullstackbackend.exception;

public class CustomerNotFoundException extends RuntimeException {
    public CustomerNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }
}
