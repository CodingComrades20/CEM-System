package com.codingcomrades.fullstackbackend.controller;

import com.codingcomrades.fullstackbackend.exception.ProductNotFoundException;
import com.codingcomrades.fullstackbackend.model.Product;
import com.codingcomrades.fullstackbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/product")
    Product newProduct(@RequestBody Product newProduct) {

        return productRepository.save(newProduct);
    }

    @GetMapping("/product")
    List<Product> getallProducts() {
        return productRepository.findAll();
    }


    @GetMapping("/product/{id}")
    Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException(id));
    }

    @PutMapping("/product/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setImage(newProduct.getImage());
                    product.setName(newProduct.getName());
                    product.setCategory(newProduct.getCategory());
                    product.setBrand(newProduct.getBrand());
                    product.setQuantity(newProduct.getQuantity());
                    product.setUnit(newProduct.getUnit());
                    product.setUnitValue(newProduct.getUnitValue());
                    product.setPrice(newProduct.getPrice());
                    product.setManufactureDate(newProduct.getManufactureDate());
                    product.setExpiryDate(newProduct.getExpiryDate());
                    product.setBatchNumber(newProduct.getBatchNumber());
                    return productRepository.save(product);

                }).orElseThrow(() -> new ProductNotFoundException(id));
    }

    @DeleteMapping("/product/{id}")
    String deleteProduct(@PathVariable Long id) {
        if (!productRepository.existsById(id)) {
            throw new ProductNotFoundException(id);

        }
        productRepository.deleteById(id);
        return "Product with id " + id + "has been deleted success.";

    }


}
