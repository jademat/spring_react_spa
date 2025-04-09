package com.example.jademat.semiprojectv2.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = {"http://localhost:5173","http://127.0.0.1:3000"})
@Controller
@RequestMapping("/api/oauth/kakao")
@Slf4j
@RequiredArgsConstructor
public class KakaoController {

    @Value("${kakao.client.id}")
    private String clientId;

    @Value("${kakao.redirect.uri}")
    private String redirecturi;

    private final RestTemplate restTemplate;
    private static String AccessToken = null;

    // 카카오 로그인 - 로그인 후 인가 코드 받기
    @GetMapping("/login")
    public String kakaoLogin() {
        String authorization = "https://kauth.kakao.com/oauth/authorize";
        String params = "?client_id=%s&redirect_uri=%s&response_type=code";
        String kakaoUrl = String.format(authorization + params, clientId, redirecturi);

        return "redirect:" + kakaoUrl;

    }

    // 카카오 인증 후 redirect 엔드 포인트 - 인가 코드를 이용해서 액세스토큰 받기
    @GetMapping("/callback")
    public ResponseEntity<?> kakaoCallback(@RequestParam String code) {
        // 1단계 : 인가코드 출력 - 테스트용
        log.info("인가코드: " + code);

        // 2단계 :
        return null;
    }

    // 카카오 로그아웃
}
