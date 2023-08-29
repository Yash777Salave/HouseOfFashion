package com.example.houseoffashion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@SpringBootApplication
public class HouseOfFashionApplication {

	public static void main(String[] args) {
		SpringApplication.run(HouseOfFashionApplication.class, args);
	}

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("http://localhost:3000"); // Replace with your frontend origin
        corsConfiguration.addAllowedMethod("*"); // Allow all HTTP methods
        corsConfiguration.addAllowedHeader("*"); // Allow all headers
        corsConfiguration.setAllowCredentials(true); // Allow credentials (cookies, etc.)

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);

        return new CorsFilter(source);
    }
}
