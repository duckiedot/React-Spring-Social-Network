package com.social.network.domain.userAccount.roles;

import com.social.network.domain.userAccount.Authority;

public class RegisteredUser extends Authority {

    public RegisteredUser() {
        this.roleName = "ROLE_REGISTERED";
    }
}
