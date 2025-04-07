package com.example.jademat.semiprojectv2.service;

import com.example.jademat.semiprojectv2.domain.Gallery;
import com.example.jademat.semiprojectv2.domain.Pds;
import com.example.jademat.semiprojectv2.domain.PdsReplyDTO;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PdsService {

    boolean newPds(Pds pds, List<MultipartFile> panames);

    PdsReplyDTO readOnePdsReply(int pno);
}
