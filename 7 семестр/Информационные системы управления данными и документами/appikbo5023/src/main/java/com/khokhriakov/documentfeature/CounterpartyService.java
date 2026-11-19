package com.khokhriakov.documentfeature;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CounterpartyService {
    private final CounterpartyRepository repository;

    public CounterpartyService(CounterpartyRepository repository) {
        this.repository = repository;
    }

    public Counterparty save(Counterparty counterparty) {
        return repository.save(counterparty);
    }

    public List<Counterparty> findAll() {
        return repository.findAll();
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}