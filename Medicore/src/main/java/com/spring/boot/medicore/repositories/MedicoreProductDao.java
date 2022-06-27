package com.spring.boot.medicore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.boot.medicore.entities.MedicoreProduct;
@Repository
public interface MedicoreProductDao extends JpaRepository<MedicoreProduct, Integer> {

}
