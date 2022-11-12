package com.social.network.service;

import com.social.network.domain.WallPost;
import com.social.network.domain.userAccount.User;
import com.social.network.repository.WallPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WallPostService {

    private final WallPostRepository wallPostRepository;

    @Autowired
    public WallPostService(WallPostRepository wallPostRepository) {
        this.wallPostRepository = wallPostRepository;
    }

    //Returns new wall post
    public WallPost createPost(User user) {
        WallPost wallPost = new WallPost();
        wallPost.setUser(user);

        return this.wallPostRepository.save(wallPost);
    }
}
