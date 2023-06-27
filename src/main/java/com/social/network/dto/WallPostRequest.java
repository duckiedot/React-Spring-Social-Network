package com.social.network.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class WallPostRequest {
    private String wallPostName;
    private String wallPostBody;
}
