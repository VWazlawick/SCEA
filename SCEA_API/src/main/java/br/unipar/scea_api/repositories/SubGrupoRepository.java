package br.unipar.scea_api.repositories;

import br.unipar.scea_api.models.SubGrupo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubGrupoRepository extends JpaRepository<SubGrupo, Long> {
}
