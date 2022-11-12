package com.social.network.domain;

import com.social.network.domain.userAccount.User;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
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
}
