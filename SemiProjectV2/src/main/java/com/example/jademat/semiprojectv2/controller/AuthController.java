package com.example.jademat.semiprojectv2.controller;

import com.example.jademat.semiprojectv2.domain.Member;
import com.example.jademat.semiprojectv2.domain.MemberDTO;
import com.example.jademat.semiprojectv2.domain.User;
import com.example.jademat.semiprojectv2.service.MemberService;
import com.example.jademat.semiprojectv2.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// 교차출처 리소스 공유 CORS
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth/")
@Slf4j
@RequiredArgsConstructor
public class AuthController {

    private final MemberService memberservice;
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> joinok(@RequestBody User user) {
        ResponseEntity<?> response = ResponseEntity.internalServerError().build();

        log.info("submit된 회원정보 : {}",user);
        try {

            userService.newUser(user);
            response = ResponseEntity.ok().build();
        } catch (IllegalStateException e) {

            response = ResponseEntity.badRequest().body(e.getMessage());
            e.printStackTrace();
        } catch (Exception e) {

            e.printStackTrace();
        }

        return response;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> loginok(@RequestBody User user) {
        ResponseEntity<?> response = ResponseEntity.internalServerError().build();

        log.info("login된 회원정보 : {}",user);
        try {
            User loginUser =  userService.loginUser(user);

            response = ResponseEntity.ok().build();
        } catch (IllegalStateException e) {

            response = ResponseEntity.badRequest().body(e.getMessage());
            e.printStackTrace();
        } catch (Exception e) {

            e.printStackTrace();
        }

        return response;
    }


}
