package com.nguyenvanhuy.backend.controller;


import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenvanhuy.backend.entity.Category;
import com.nguyenvanhuy.backend.service.CategoryService;
import org.springframework.http.HttpHeaders;


import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/categories")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, exposedHeaders = "Content-Range")
public class CategoryController {

    private CategoryService categoryService;

    //Create Product REST API
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category){
        Category savedCategory = categoryService.createCategory(category);
        return new ResponseEntity<>(savedCategory,HttpStatus.CREATED);
    }
    //Get ALL Products REST API
    // http://localhost:8000/api/Products/1
    @GetMapping("{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long categoryId){
        Category Category=categoryService.getCategoryById(categoryId);
        return new ResponseEntity<>(Category,HttpStatus.OK);
    }
    //Get ALL Products REST API
    //http://localhost:8000/api/Products
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategorys(){
        List<Category> Categories=categoryService.getAllCategories();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "item 0-" + Categories.size() + "/" + Categories.size());
        return ResponseEntity.ok().headers(headers).body(Categories);

    }
    //Update Product REST API
    @PutMapping("{id}")
    //http://localhost:8000/api/products/1
    public ResponseEntity<Category> updateCategory(@PathVariable("id") Long categoryId,@RequestBody Category Category){
        Category.setId(categoryId);
        Category updatedCategory = categoryService.updateCategory(Category);
        return new ResponseEntity<>(updatedCategory,HttpStatus.OK);
    }
    //Delete Product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long categoryId){
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>("Category successfully deleted!",HttpStatus.OK);
    }
    
}