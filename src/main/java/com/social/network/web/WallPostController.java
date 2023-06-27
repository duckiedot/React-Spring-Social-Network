package com.social.network.web;

import com.social.network.domain.WallPost;
import com.social.network.domain.userAccount.User;
import com.social.network.domain.userAccount.roles.RegisteredUser;
import com.social.network.dto.WallPostRequest;
import com.social.network.service.WallPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/api/wall")
public class WallPostController {

    private final WallPostService wallPostService;

    @Autowired
    public WallPostController(WallPostService wallPostService) {
        this.wallPostService = wallPostService;
    }

    @PostMapping("create")
    public ResponseEntity<?> createWallPost (@RequestBody WallPostRequest wallPostRequest) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        WallPost wallPost = wallPostService.createPost(wallPostRequest, (User) authentication.getPrincipal());

        return ResponseEntity.ok(wallPost.getId());
    }

    @GetMapping("load/all")
    public ResponseEntity<?> getAllPosts(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(this.wallPostService.getAllPosts());
    }
}
