package com.nguyenvanhuy.backend.service;

import com.nguyenvanhuy.backend.entity.Token;
import java.util.List;

public interface TokenService {
    public Token createToken(Token token);

    public Token getTokenById(Long tokenId);

    public List<Token> getAllTokens();

    public Token updateToken(Token token);

    public void deleteToken(Long tokenId);
}
