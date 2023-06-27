package com.social.network.domain.userAccount.roles;

import com.social.network.domain.userAccount.Authority;

public class RegisteredUser extends Authority {

    public final static String ROLE_NAME = "ROLE_REGISTERED";

    public RegisteredUser() {
        this.roleName = ROLE_NAME;
    }
}
