package com.codingcomrades.fullstackbackend.controller;
import com.codingcomrades.fullstackbackend.exception.PaymentNotFoundException;
import com.codingcomrades.fullstackbackend.model.Brand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class BrandController {
    @Autowired
    private com.codingcomrades.fullstackbackend.repository.BrandRepository BrandRepository;

    @PostMapping("/brand")
    Brand newBrand(@RequestBody Brand newBrand) {

        return BrandRepository.save(newBrand);
    }

    @GetMapping("/brand")
    List<Brand> getallBrand() {
        return BrandRepository.findAll();
    }

    @PutMapping("/brand/{id}")
    Brand updateBrand(@RequestBody Brand newBrand, @PathVariable Long id) {
        return BrandRepository.findById(id)
                .map(brand -> {
                    brand.setBrandName(newBrand.getBrandName());
                    return BrandRepository.save(brand);

                }).orElseThrow(() -> new PaymentNotFoundException(id));
    }

    @DeleteMapping("/brand/{id}")
    String deleteBrand(@PathVariable Long id) {
        if (!BrandRepository.existsById(id)) {
            throw new PaymentNotFoundException(id);

        }
        BrandRepository.deleteById(id);
        return "Payment with id " + id + "has been deleted success.";
    }
}
