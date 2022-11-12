package com.social.network.repository;

import com.social.network.domain.WallPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WallPostRepository extends JpaRepository<WallPost, Long> {
}
