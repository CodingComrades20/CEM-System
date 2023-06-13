package com.codingcomrades.fullstackbackend.controller;

import com.codingcomrades.fullstackbackend.exception.SaleNotFoundException;
import com.codingcomrades.fullstackbackend.model.Sale;
import com.codingcomrades.fullstackbackend.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class SaleController {

    @Autowired
    private SaleRepository saleRepository;

    @PostMapping("/sale")
    Sale newSale(@RequestBody Sale newSale){

        return saleRepository.save(newSale);
    }

    @GetMapping("/sales")
    List<Sale> getAllSales() {

        return saleRepository.findAll();
    }

    @GetMapping("/sale/{id}")
    Sale getSaleById(@PathVariable Long id) {

        return saleRepository.findById(id)
                .orElseThrow(() -> new SaleNotFoundException(id));
    }

    @PutMapping("/sale/{id}")
    Sale updateSale(@RequestBody Sale newSale, @PathVariable Long id) {

        return saleRepository.findById(id)
                .map(sale -> {
                    sale.setSalesorderid(newSale.getSalesorderid());
                    sale.setCusname(newSale.getCusname());
                    sale.setProductname(newSale.getProductname());
                    sale.setDeliveryaddress(newSale.getDeliveryaddress());
                    sale.setDate(newSale.getDate());
                    sale.setCno(newSale.getCno());


                    return saleRepository.save(sale);
                }).orElseThrow(() -> new SaleNotFoundException(id));
    }

    @DeleteMapping("/sale/{id}")
    String deleteSale(@PathVariable Long id) {

        if (!saleRepository.existsById(id)) {

            throw new SaleNotFoundException(id);
        }

        saleRepository.deleteById(id);
        return  "Sale with id" + id + "has been deleted successfully.";

        }

    }
