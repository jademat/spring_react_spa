package com.example.jademat.semiprojectv2.service;

import com.example.jademat.semiprojectv2.domain.Gallery;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface GalleryService {

    boolean newGalleryImage(Gallery gal, List<MultipartFile> ginames);
}
