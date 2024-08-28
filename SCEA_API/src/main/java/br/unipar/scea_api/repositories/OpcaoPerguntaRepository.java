package br.unipar.scea_api.repositories;

import br.unipar.scea_api.models.OpcaoPergunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OpcaoPerguntaRepository extends JpaRepository<OpcaoPergunta, Long> {
}
