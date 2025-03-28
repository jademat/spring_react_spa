package com.example.jademat.semiprojectv2.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "boards")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Board {

    @Id
    // IDENTITY, AUTO = mysql,mariadb
    // SEQUENCCE = oracle
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bno;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String userid;

    @CreationTimestamp
    private LocalDateTime regdate;

    @Column(nullable = false)
    private int thumbs = 0;

    @Column(nullable = false)
    private int views = 0;

    @Column(nullable = false)
    private String contents;

    // 연관 매핑 - 객체와 데이터베이스 테이블 간의 관계에 대한 개념정의
    // 1:1 관계 : OneToOne 애너테이션 사용
    //          양쪽 모두 하나의 인스턴스만 참조, 주/대상 테이블에 외래키 설정 필요
    // 1:n 관계 : OneToMany 애너테이션 사용
    //             주 (1) 테이블에서 대상(n) 테이블로의 관계 설정, 양방향 관계
    //              mappedBy : 양방향 관계 정의시 주 쪽 설정시 사용
    //              fetch : 양방향 관계에서 데이터를 가져오는 방식 정의
    //              LAZY : 필요(사용)시 데이터를 불러옴
    //              EAGER : 미리 데이터를 불러옴
    // n:n 관계 : ManyToMany 애너테이션 사용
    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY)
    private List<Reply> replies = new ArrayList<>();

}


