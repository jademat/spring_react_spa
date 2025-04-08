package com.example.jademat.semiprojectv2.service;

import com.example.jademat.semiprojectv2.domain.User;

public interface UserService {

    User newUser(User user);

    User loginUser(User user);

    boolean verifyEmail(String userid, String email, String code);
}
