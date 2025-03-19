package com.example.jademat.semiprojectv2.controller;

import com.example.jademat.semiprojectv2.domain.MemberDTO;
import com.example.jademat.semiprojectv2.service.MemberService;
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

    @PostMapping("/signup")
    public ResponseEntity<?> joinok(@RequestBody MemberDTO member) {
        ResponseEntity<?> response = ResponseEntity.internalServerError().build();

        log.info("submit된 회원정보 : {}",member);
        try {

            memberservice.newMember(member);
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
