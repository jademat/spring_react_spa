package com.example.jademat.semiprojectv2.controller;

import com.example.jademat.semiprojectv2.domain.KakaoTokenResponse;
import com.example.jademat.semiprojectv2.domain.KakaoUserInfo;
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
                AccessToken = tokenResponse.getAccess_token();
                log.info("Access token: " + AccessToken);
            }

            KakaoUserInfo kakaoUserInfo = getUserInfo(AccessToken);
            log.info("KakaoUserInfo: " + kakaoUserInfo);
            return ResponseEntity.ok().body(kakaoUserInfo.getProperties().getNickname());
        } catch (Exception e) {
            log.error("Error getting token: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error getting token: " + e.getMessage());
        }
    }

    // 액세스 토큰으로 사용자 정보 알아내기
    private KakaoUserInfo getUserInfo(String accessToken) {
        // 사용자 정보 요청을 위한 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        headers.set("Authorization", "Bearer " + accessToken);

        // HTTP 요청 엔티티 생성
        HttpEntity<String> request = new HttpEntity<>(headers);

        // GET 요청으로 사용자 정보 받기
        ResponseEntity<KakaoUserInfo> response = restTemplate.exchange(
                "https://kapi.kakao.com/v2/user/me",
                HttpMethod.GET,
                request,
                KakaoUserInfo.class
        );

        return response.getBody();
    }


    @GetMapping("/logout")
    public ResponseEntity<String> kakaoLogout() {
        String logoutUrl = "https://kapi.kakao.com/v1/user/logout";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
        headers.set("Authorization", "Bearer " + AccessToken);

        System.out.println("Using token: " + AccessToken);
        System.out.println("Authorization header: " + headers.get("Authorization"));

        // HTTP 요청 엔티티 생성
        HttpEntity<String> request = new HttpEntity<>(headers);

        // GET 요청으로 사용자 정보 받기
        ResponseEntity<String> response = restTemplate.exchange(
                logoutUrl, HttpMethod.POST,
                request, String.class
        );

        log.info("Logout Response: {}", response.getStatusCode());

        return ResponseEntity.ok("로그아웃 성공!!");
    }


}
