package com.social.network.service;

import com.social.network.domain.userAccount.User;
import com.social.network.repository.UserRepository;
import com.social.network.util.CustomPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final CustomPasswordEncoder customPasswordEncoder;

    private final UserRepository userRepository;

    @Autowired
    public UserDetailsServiceImpl(
            CustomPasswordEncoder customPasswordEncoder,
            UserRepository userRepository
    ) {
        this.customPasswordEncoder = customPasswordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> userOptional = this.userRepository.findByUsername(username);

        return userOptional.orElseThrow(() -> new UsernameNotFoundException("Username not found"));
    }
}
