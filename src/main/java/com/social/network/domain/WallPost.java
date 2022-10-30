package com.social.network.domain;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="user_wall_post")
public class WallPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    private User user;

    @Column
    private String wallPostName;

    @Column
    private String wallPostBody;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    @Column(nullable = false)
    private Date createdAt;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getWallPostName() {
        return wallPostName;
    }

    public void setWallPostName(String wallPostName) {
        this.wallPostName = wallPostName;
    }

    public String getWallPostBody() {
        return wallPostBody;
    }

    public void setWallPostBody(String wallPostBody) {
        this.wallPostBody = wallPostBody;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
