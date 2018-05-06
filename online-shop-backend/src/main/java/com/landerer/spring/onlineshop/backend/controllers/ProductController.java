package com.landerer.spring.onlineshop.backend.controllers;

import com.landerer.spring.onlineshop.backend.models.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/v01/products")
public class ProductController {

    @GetMapping
    public ResponseEntity<List<Product>> getProducts() {
        final List<Product> products = Collections.singletonList(
                new Product(
                        "ID_1",
                        "NAME_1",
                        "DESC_1",
                        "$345"));
        return ResponseEntity.ok(products);
    }
}
