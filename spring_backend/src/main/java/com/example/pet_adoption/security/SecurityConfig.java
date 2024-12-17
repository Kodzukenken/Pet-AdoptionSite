package com.example.pet_adoption.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig{

    @Autowired
    private JwtRequestFilter jwtRequestFilter;

    // public SecurityConfig(JwtUtil jwtUtil) {
    //     this.jwtUtil = jwtUtil;
    // }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/login", "/auth/signup").permitAll()
                .anyRequest().authenticated() // Require auth for other endpoints
            )
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class); // Add JWT filter
        return http.build();
    }

        //For role base access 
    // @Override
    // protected void configure(HttpSecurity http) throws Exception {
    //   http.csrf().disable()
    //     .authorizeRequests()
    //     .antMatchers("/api/admin/**").hasRole("ADMIN") // Only users with role "ADMIN" can access
    //     .antMatchers("/api/user/**").hasAnyRole("USER", "ADMIN") // USER or ADMIN can access
    //     .anyRequest().authenticated()
    //     .and()
    //     .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

    //   http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
    // }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
