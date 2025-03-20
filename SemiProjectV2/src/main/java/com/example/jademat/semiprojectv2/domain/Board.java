package com.example.jademat.semiprojectv2.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

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
}


