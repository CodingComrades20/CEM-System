package com.codingcomrades.fullstackbackend.controller;


import com.codingcomrades.fullstackbackend.exception.PurchaseNotFoundException;
import com.codingcomrades.fullstackbackend.model.Purchase;
import com.codingcomrades.fullstackbackend.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PurchaseController {

    @Autowired
    private PurchaseRepository purchaseRepository;

    @PostMapping("/purchase")
    Purchase newPurchase(@RequestBody Purchase newPurchase){

        return purchaseRepository.save(newPurchase);
    }

    @GetMapping("/purchases")
    List<Purchase> getAllPurchases() {

        return purchaseRepository.findAll();
    }

    @GetMapping("/purchase/{id}")
    Purchase  getPurchaseById(@PathVariable Long id) {

        return purchaseRepository.findById(id)
                .orElseThrow(() -> new PurchaseNotFoundException(id));
    }

    @PutMapping("/purchase/{id}")
    Purchase updatePurchase(@RequestBody Purchase newPurchase, @PathVariable Long id) {

        return purchaseRepository.findById(id)
                .map(purchase -> {
                    purchase.setPurchaseorderid(newPurchase.getPurchaseorderid());
                    purchase.setSupname(newPurchase.getSupname());
                    purchase.setProductname(newPurchase.getProductname());
                    purchase.setDate(newPurchase.getDate());
                    purchase.setCno(newPurchase.getCno());


                    return purchaseRepository.save(purchase);
                }).orElseThrow(() -> new PurchaseNotFoundException(id));
    }

    @DeleteMapping("/purchase/{id}")
    String deletePurchase(@PathVariable Long id) {

        if (!purchaseRepository.existsById(id)) {

            throw new PurchaseNotFoundException(id);
        }

        purchaseRepository.deleteById(id);
        return  "Purchase with id" + id + "has been deleted successfully.";

    }

}
