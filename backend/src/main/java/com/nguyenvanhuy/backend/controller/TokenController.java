package com.nguyenvanhuy.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nguyenvanhuy.backend.entity.Token;
import com.nguyenvanhuy.backend.service.TokenService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/tokens")
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")

public class TokenController {
    private TokenService tokenService;

    // Create Token REST API
    @PostMapping
    public ResponseEntity<Token> createToken(@RequestBody Token token) {
        Token saveToken = tokenService.createToken(token);
        return new ResponseEntity<>(saveToken, HttpStatus.CREATED);
    }

    // Get Token by id REST API
    // http://localhost:8000/api/Tokens/1
    @GetMapping("{id}")
    public ResponseEntity<Token> getTokenById(@PathVariable("id") Long tokenId) {
        Token Token = tokenService.getTokenById(tokenId);
        return new ResponseEntity<>(Token, HttpStatus.OK);
    }

    // Get Token REST API
    // http://localhost:8000/api/Tokens
    @GetMapping
    public ResponseEntity<List<Token>> getAllTokens() {
        List<Token> Token = tokenService.getAllTokens();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "item 0-" + Token.size() + "/" + Token.size());
        return ResponseEntity.ok().headers(headers).body(Token);
    }

    // Update Token REST API
    @PutMapping("{id}")
    // http://localhost:8000/api/Tokens/1
    public ResponseEntity<Token> updateToken(@PathVariable("id") Long tokenId,
            @RequestBody Token Token) {
        Token updateToken = tokenService.updateToken(Token);
        return new ResponseEntity<>(updateToken, HttpStatus.OK);
    }

    // Delete Token REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteToken(@PathVariable("id") Long tokenId) {
        tokenService.deleteToken(tokenId);
        return new ResponseEntity<>("Token successfully deleted!", HttpStatus.OK);
    }
}