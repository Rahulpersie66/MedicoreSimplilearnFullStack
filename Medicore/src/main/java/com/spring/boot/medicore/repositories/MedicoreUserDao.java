package com.spring.boot.medicore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.boot.medicore.entities.MedicoreUserRegistered;
@Repository
public interface MedicoreUserDao extends JpaRepository<MedicoreUserRegistered, Integer> {

}
