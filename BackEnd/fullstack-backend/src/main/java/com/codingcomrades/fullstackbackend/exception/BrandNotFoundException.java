package com.codingcomrades.fullstackbackend.exception;

public class BrandNotFoundException extends RuntimeException{
    public BrandNotFoundException(Long id) {
        super("Could not found the brand with id" + id);

    }
}
