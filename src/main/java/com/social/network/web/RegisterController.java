package com.social.network.web;

import com.social.network.domain.userAccount.User;
import com.social.network.repository.UserRepository;
import com.social.network.util.CustomPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class RegisterController {

    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    @Autowired
    public RegisterController(UserRepository userRepository, CustomPasswordEncoder customPasswordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = customPasswordEncoder.getPasswordEncoder();
    }

    @PostMapping("register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            this.userRepository.save(user);

            return ResponseEntity.ok().build();
        } catch (Exception exception) {
            return ResponseEntity.badRequest().body(exception);
        }
    }
}
