package com.codingcomrades.fullstackbackend.controller;

import com.codingcomrades.fullstackbackend.exception.SupplierNotFoundException;
import com.codingcomrades.fullstackbackend.model.Supplier;
import com.codingcomrades.fullstackbackend.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class SupplierController {

    @Autowired
    private SupplierRepository supplierRepository;

    @PostMapping("/supplier")
    Supplier newSupplier(@RequestBody Supplier newSupplier){
        return supplierRepository.save(newSupplier);
    }

    @GetMapping("/suppliers")
    List<Supplier> getAllSuppliers() { return supplierRepository.findAll(); }


    @GetMapping ("/supplier/{id}")
    Supplier getSupplierById(@PathVariable Long id) {
        return supplierRepository.findById(id)
                .orElseThrow(() -> new SupplierNotFoundException(id));
    }

    @PutMapping("/supplier/{id}")
    Supplier updateSupplier(@RequestBody Supplier newSupplier, @PathVariable Long id) {
        return supplierRepository.findById(id)
                .map(supplier -> {
                    supplier.setName(newSupplier.getName());
                    supplier.setAddress(newSupplier.getAddress());
                    supplier.setCno(newSupplier.getCno());
                    supplier.setEmail(newSupplier.getEmail());

                    return supplierRepository.save(supplier);
                }).orElseThrow(() -> new SupplierNotFoundException(id));
    }

    @DeleteMapping ("/supplier/{id}")
    String deleteSupplier(@PathVariable Long id){
        if(!supplierRepository.existsById(id)){
            throw new SupplierNotFoundException(id);
        }
        supplierRepository.deleteById(id);
        return "Supplier with id "+id+"has been deleted success.";

    }

}
