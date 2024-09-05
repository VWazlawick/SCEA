package br.unipar.scea_api.repositories;

import br.unipar.scea_api.models.TipoPergunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoPerguntaRepository extends JpaRepository<TipoPergunta, Long> {
}
