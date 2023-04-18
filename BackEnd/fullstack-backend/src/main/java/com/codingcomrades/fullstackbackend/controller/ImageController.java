package com.codingcomrades.fullstackbackend.controller;

import com.codingcomrades.fullstackbackend.model.Image;
import com.codingcomrades.fullstackbackend.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/api/images")
public class ImageController {

    @Autowired
    private ImageRepository imageRepository;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            Image image = new Image();
            image.setName(file.getOriginalFilename());
            image.setType(file.getContentType());
            image.setData(file.getBytes());
            imageRepository.save(image);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Image image = imageRepository.findById(id).orElse(null);
        if (image == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(image.getData());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteImage(@PathVariable Long id) {
        Image image = imageRepository.findById(id).orElse(null);
        if (image == null) {
            return ResponseEntity.notFound().build();
        }
        try {
            imageRepository.delete(image);
            return ResponseEntity.ok().body("Deleted the file successfully: " + image.getName());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not delete the file: " + image.getName() + "!");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateImage(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        Image image = imageRepository.findById(id).orElse(null);
        if (image == null) {
            return ResponseEntity.notFound().build();
        }
        try {
            image.setName(file.getOriginalFilename());
            image.setType(file.getContentType());
            image.setData(file.getBytes());
            imageRepository.save(image);
            return ResponseEntity.ok().body("Updated the file successfully: " + image.getName());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Could not update the file: " + image.getName() + "!");
        }
    }
}