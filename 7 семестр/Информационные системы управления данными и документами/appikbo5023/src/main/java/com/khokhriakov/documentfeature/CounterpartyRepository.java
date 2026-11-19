package com.khokhriakov.documentfeature;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CounterpartyRepository extends JpaRepository<Counterparty, Long> {
    List<Counterparty> findByNameContainingIgnoreCase(String name);
}