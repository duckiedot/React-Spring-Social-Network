package com.social.network.service;

import com.social.network.domain.WallPost;
import com.social.network.domain.userAccount.User;
import com.social.network.dto.WallPostRequest;
import com.social.network.repository.WallPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WallPostService {

    private final WallPostRepository wallPostRepository;

    @Autowired
    public WallPostService(WallPostRepository wallPostRepository) {
        this.wallPostRepository = wallPostRepository;
    }

    //Returns new wall post
    public WallPost createPost(WallPostRequest wallPostRequest, User user) {
        WallPost wallPost = new WallPost();

        wallPost.setUser(user);
        wallPost.setWallPostName(wallPostRequest.getWallPostName());
        wallPost.setWallPostBody(wallPostRequest.getWallPostBody());

        return this.wallPostRepository.save(wallPost);
    }

    public List<WallPost> getAllPosts() {
        return this.wallPostRepository.findAll(Sort.by(Sort.Direction.DESC, "id")).stream().toList();
    }
}
