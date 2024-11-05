package br.unipar.scea_api.repositories;

import br.unipar.scea_api.models.Pergunta;
import br.unipar.scea_api.models.SubGrupo;
import br.unipar.scea_api.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PerguntaRepository extends JpaRepository<Pergunta, Long> {

    List<Pergunta> findBySubGrupoIn(List<SubGrupo> subGrupos);
}
