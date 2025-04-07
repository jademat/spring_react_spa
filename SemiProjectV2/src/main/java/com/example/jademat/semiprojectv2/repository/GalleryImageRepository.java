package com.example.jademat.semiprojectv2.repository;

import com.example.jademat.semiprojectv2.domain.Gallery;

import com.example.jademat.semiprojectv2.domain.GalleryImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GalleryImageRepository extends JpaRepository<GalleryImage, Long> {
}
