package com.example.jademat.semiprojectv2.domain;

import java.time.LocalDateTime;

//@Data
//@Builder
//@AllArgsConstructor
//public class BoardDTO {
//    private int bno;
//    private String title;
//    private String userid;
//    private LocalDateTime regdate;
//    private String thumbs;
//    private String views;
//}

// 엔티티의 특정 필드만 API로 노출해야 할 경우
// 조회 성능을 극대화해야 할 경우에도 사용
public interface BoardDTO {
    int getBno();
    String getTitle();
    String getUserid();
    LocalDateTime getRegdate();
    String getThumbs();
    String getViews();
}


