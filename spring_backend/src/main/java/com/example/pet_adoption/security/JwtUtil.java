package com.example.pet_adoption.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    //keygen & 1hr expire
    private final Key SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256); 
    private final long EXPIRATION_TIME = 1000 * 60 * 60; 

    // make token
    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SECRET_KEY) 
                .compact();
    }

    // validate 
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder() 
                .setSigningKey(SECRET_KEY) 
                .build() 
                .parseClaimsJws(token); 
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false; // Invalid token
        }
    }

    // email from token
    public String extractUsername(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }
}
