package com.example.jademat.semiprojectv2.controller;

import com.example.jademat.semiprojectv2.domain.Board;
import com.example.jademat.semiprojectv2.domain.BoardListDTO;
import com.example.jademat.semiprojectv2.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/board/")
@RequiredArgsConstructor
@Slf4j
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/write")
    public ResponseEntity<?> writeok(@RequestBody Board board) {
        ResponseEntity<?> response = ResponseEntity.internalServerError().build();

        log.info("insert된 게시글정보 : {}",board);

        try {
            boardService.newBoard(board);
            response = ResponseEntity.ok().build();
        }catch (IllegalStateException e){
            response = ResponseEntity.badRequest().body(e.getMessage());
            e.printStackTrace();
        } catch (Exception e){
            e.printStackTrace();
        }
        return response;

    }

    // list 앤드포인트 변경
    // http://localhost:8080/api/board/list?cpg=1
    // http://localhost:8080/api/board/list/1
    @GetMapping("/list/{cpg}")
    public ResponseEntity<?> list(@PathVariable int cpg){

        BoardListDTO boardListDTO= boardService.readBoard(cpg);

        return new ResponseEntity<>(boardListDTO, HttpStatus.OK);

    }

}
