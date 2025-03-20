package com.example.jademat.semiprojectv2.repository;

import com.example.jademat.semiprojectv2.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUserid(String userid);
    boolean existsByEmail(String email);



}
