package br.unipar.scea_api.repositories;

import br.unipar.scea_api.models.Profissional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional, Long> {
    public List<Profissional> findByNomeContainingIgnoreCase(String nome);
}
