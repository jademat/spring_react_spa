package com.example.jademat.semiprojectv2.controller;

import com.example.jademat.semiprojectv2.domain.KakaoTokenResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = {"http://localhost:5173", "http://127.0.0.1:3000"})
@Controller
@RequestMapping("/api/oauth/kakao")
@Slf4j
@RequiredArgsConstructor
public class KakaoController {

    private static String AccessToken = null;
    private final RestTemplate restTemplate;
    @Value("${kakao.client.id}")
    private String clientId;
    @Value("${kakao.redirect.uri}")
    private String redirecturi;

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

        // 2단계 : 액세스 토큰 요청
        String authorization = "https://kauth.kakao.com/oauth/token";
        String params = "?client_id=%s&redirect_uri=%s&code=%s&grant_type=authorization_code";
        String kakaoUrl = String.format(authorization + params, clientId, redirecturi, code);

        // HTTP 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        // HTTP 요청 엔티티 생성
        HttpEntity<String> request = new HttpEntity<>(headers);

        try {
            // POST 요청으로 토큰 받기
            ResponseEntity<KakaoTokenResponse> response = restTemplate.postForEntity(
                    kakaoUrl,
                    request,
                    KakaoTokenResponse.class
            );

            // 응답에서 AccessToken 추출
            KakaoTokenResponse tokenResponse = response.getBody();
            if (tokenResponse != null) {
                String accessToken = tokenResponse.getAccess_token();
                log.info("Access token: " + accessToken);
            }
            return ResponseEntity.ok().body(tokenResponse);
        } catch (Exception e) {
            log.error("Error getting token: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error getting token: " + e.getMessage());
        }
    }
}
