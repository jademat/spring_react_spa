package com.example.jademat.semiprojectv2.controller;

import com.example.jademat.semiprojectv2.domain.User;
import com.example.jademat.semiprojectv2.jwt.JwtTokenProvider;
import com.example.jademat.semiprojectv2.utils.GoogleRecaptchaService;
import com.example.jademat.semiprojectv2.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

// 교차출처 리소스 공유 CORS
@CrossOrigin(origins = {"http://localhost:5173","http://127.0.0.1:3000"})
@RestController
@RequestMapping("/api/auth/")
@Slf4j
@RequiredArgsConstructor
public class AuthController {

    //private final MemberService memberservice;
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;
    private final GoogleRecaptchaService googleRecaptchaService;

    @PostMapping("/signup")
    public ResponseEntity<?> joinok(@RequestBody User user) {
        ResponseEntity<?> response = ResponseEntity.internalServerError().build();

        log.info("submit된 회원정보 : {}",user);
        try {
            if (!googleRecaptchaService.verifyRecaptcha(user.getGRecaptchaResponse())) {
                throw new IllegalStateException("자동가입방지 코드 오류!!");
            }

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
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUserid(),user.getPasswd()));

            // 인증이 완료되면 jwt 토큰 생성
            final String jwt = jwtTokenProvider.generateToken(user.getUserid());

            // 생성한 토큰을 JSON 형식으로 만듦
            Map<String,String> tokens = Map.of(
                    "accessToken",jwt
            );
            response = ResponseEntity.ok().body(tokens);
        } catch (UsernameNotFoundException e) {
            response = ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디가 존재하지 않습니다.");
        } catch (BadCredentialsException e) {
            response = ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("아이디나 비밀번호 불일치");
        } catch (Exception e) {
            response = ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("이메일 인증을 하지 않았습니다.");
        }

        return response;
    }

    @GetMapping("/verifyCode/{userid}/{email}/{code}")
    public ResponseEntity<?> verifyCode(@PathVariable String userid,@PathVariable String email,@PathVariable String code) {
        ResponseEntity<?> response = ResponseEntity.internalServerError().build();

        if(userService.verifyEmail(userid,email,code)) {
            response = ResponseEntity.ok().body("이메일 인증이 완료 되었습니다");
        } else{
            response = ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("이메일 인증 실패 - 코드를 다시 확인 요망");
        }

        return response;
    }

}
