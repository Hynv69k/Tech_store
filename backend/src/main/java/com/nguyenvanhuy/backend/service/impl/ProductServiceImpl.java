package com.nguyenvanhuy.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.nguyenvanhuy.backend.entity.Product;
import com.nguyenvanhuy.backend.service.ProductService;
import com.nguyenvanhuy.backend.repository.ProductRepository;
import java.util.List;
import java.util.Optional;
import java.util.ArrayList;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

   private ProductRepository productRepository;
   public List<Product> getLatestProductsInCategory(Long categoryId, int pageSize) {
PageRequest pageRequest = PageRequest.of(0, pageSize, Sort.by(Sort.Direction.DESC, "created_at"));
return productRepository.findLatestProductsInCategory(categoryId, pageRequest);
}

   public List<Product> getProductsByCondition(String title, Long category) {
      if (title != null && category != null) {
         return productRepository.findByTitleAndCategoryId(title, category);
      } else if (title != null) {
         return productRepository.findByTitle(title);
      } else if (category != null) {
         return productRepository.findByCategoryId(category);
      } else {
         return new ArrayList<>();
      }
   }
   @Override
public Page<Product> getProductsByCategoryId(Long categoryId, Pageable pageable) { 
return productRepository.findProductsByCategoryId(categoryId, pageable); 
 }

   @Override
   public Product createProduct(Product product) {
      return productRepository.save(product);
   }

   @Override
   public Product getProductById(Long productId) {
      Optional<Product> optionalProduct = productRepository.findById(productId);
      return optionalProduct.get();
   }

   @Override
   public Page<Product> getAllProducts(Pageable pageable) {
      return productRepository.findAll(pageable);
   }

   @Override
   public Product updateProduct(Product product) {
      Product existingProduct = productRepository.findById(product.getId()).get();
      existingProduct.setTitle(product.getTitle());
      existingProduct.setDescription(product.getDescription());
      existingProduct.setDiscount(product.getDiscount());
      existingProduct.setThumbnail(product.getThumbnail());
      existingProduct.setCreated_at(product.getCreated_at());
      existingProduct.setUpdated_at(product.getUpdated_at());
      existingProduct.setDeleted(product.getDeleted());
      existingProduct.setPrice(product.getPrice());
      existingProduct.setCategory(product.getCategory());
      existingProduct.setGalleries(product.getGalleries());
      existingProduct.setOrderDetails(product.getOrderDetails());

      Product updateProduct = productRepository.save(existingProduct);
      return updateProduct;
   }

   @Override
   public void deleteProduct(Long productId) {
      productRepository.deleteById(productId);
   }

   

   

}