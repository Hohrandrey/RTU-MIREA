package com.khokhriakov.documentfeature;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    List<Document> findByTitleContainingIgnoreCase(String title);
    List<Document> findByType(String type);
    List<Document> findByTitleContainingIgnoreCaseAndType(String title, String type);
}