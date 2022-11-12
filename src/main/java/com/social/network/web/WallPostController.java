package com.social.network.web;

import com.social.network.domain.WallPost;
import com.social.network.domain.userAccount.User;
import com.social.network.service.WallPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/wall")
public class WallPostController {

    private final WallPostService wallPostService;

    @Autowired
    public WallPostController(WallPostService wallPostService) {
        this.wallPostService = wallPostService;
    }

    @PostMapping("create")
    public ResponseEntity<?> createWallPost (@AuthenticationPrincipal User user) {
        WallPost wallPost = wallPostService.createPost(user);

        return ResponseEntity.ok(wallPost);
    }

    @GetMapping("load/all")
    public ResponseEntity<?> getAllPosts(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(this.wallPostService.getAllPosts());
    }
}
