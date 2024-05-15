package com.nguyenvanhuy.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenvanhuy.backend.entity.Product;
import com.nguyenvanhuy.backend.service.ProductService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/products")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")

public class ProductController {
    private ProductService productService;

    @GetMapping("/getlatest")
    public ResponseEntity<List<Product>> getProductsNew(
            @RequestParam(name = "categoryid", required = false) Long category,
            @RequestParam(name = "pagesize", required = false, defaultValue = "4") int pagesize) {
        List<Product> products = productService.getLatestProductsInCategory(category, pagesize);
        return ResponseEntity.ok(products);
    }

    // Create Product REST API
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product savedProduct = productService.createProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    // Get ALL Products REST API
    // http://localhost:8000/api/Products/1
    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long productId) {
        Product Product = productService.getProductById(productId);
        return new ResponseEntity<>(Product, HttpStatus.OK);
    }

    // Get ALL Products REST API
    // http://localhost:8000/api/Products
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(required = false) Long categoryId) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> products;
        if (categoryId != null) {
            products = productService.getProductsByCategoryId(categoryId, pageable);
        } else {
            products = productService.getAllProducts(pageable);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range",
                "items " + pageable.getOffset() + "-" + (pageable.getOffset() + products.getSize()) +
                        "/" + products.getTotalElements());
        return ResponseEntity.ok().headers(headers).body(products.getContent());
    }

    // Update Product REST API
    @PutMapping("{id}")
    // http://localhost:8000/api/products/1
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long productId, @RequestBody Product Product) {
        Product.setId(productId);
        Product updatedProduct = productService.updateProduct(Product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    // Delete Product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);
    }

}