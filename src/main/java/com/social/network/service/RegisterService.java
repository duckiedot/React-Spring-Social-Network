package com.social.network.service;

import com.social.network.domain.userAccount.User;
import com.social.network.dto.RegisterRequest;
import com.social.network.factory.UserFactory;
import com.social.network.repository.UserRepository;
import com.social.network.util.CustomPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    private final UserFactory userFactory;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    @Autowired
    public RegisterService(
            UserFactory userFactory,
            UserRepository userRepository,
            CustomPasswordEncoder customPasswordEncoder
    ) {
        this.userFactory = userFactory;
        this.userRepository = userRepository;
        this.passwordEncoder = customPasswordEncoder.getPasswordEncoder();
    }

    public boolean registerUser(RegisterRequest request) {
        User newUser = this.userFactory.getObject();
        String encryptedPassword = this.passwordEncoder.encode(request.getPassword());

        if (newUser == null) {
            return false;
        }

        newUser.setUsername(request.getUsername());
        newUser.setPassword(encryptedPassword);

        try {
            this.userRepository.save(newUser);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
