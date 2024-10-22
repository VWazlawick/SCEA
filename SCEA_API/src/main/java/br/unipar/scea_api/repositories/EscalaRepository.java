package br.unipar.scea_api.repositories;

import br.unipar.scea_api.models.Escala;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EscalaRepository extends JpaRepository<Escala, Long> {
}
