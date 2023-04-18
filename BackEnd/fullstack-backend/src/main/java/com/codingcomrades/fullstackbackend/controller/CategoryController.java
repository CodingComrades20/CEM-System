package com.codingcomrades.fullstackbackend.controller;

import com.codingcomrades.fullstackbackend.exception.PaymentNotFoundException;
import com.codingcomrades.fullstackbackend.model.Category;
import com.codingcomrades.fullstackbackend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class CategoryController {
    @Autowired
    private CategoryRepository CategoryRepository;

    @PostMapping("/category")
    Category newCategory(@RequestBody Category newCategory) {

        return CategoryRepository.save(newCategory);
    }

    @GetMapping("/category")
    List<Category> getallCategories() {
        return CategoryRepository.findAll();
    }

    @PutMapping("/category/{id}")
    Category updateCategory(@RequestBody Category newCategory, @PathVariable Long id) {
        return CategoryRepository.findById(id)
                .map(category -> {
                    category.setCategoryType(newCategory.getCategoryType());
                    return CategoryRepository.save(category);

                }).orElseThrow(() -> new PaymentNotFoundException(id));
    }

    @DeleteMapping("/category/{id}")
    String deleteCategory(@PathVariable Long id) {
        if (!CategoryRepository.existsById(id)) {
            throw new PaymentNotFoundException(id);

        }
        CategoryRepository.deleteById(id);
        return "Payment with id " + id + "has been deleted success.";
    }
}
