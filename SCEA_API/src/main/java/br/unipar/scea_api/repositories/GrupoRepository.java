package br.unipar.scea_api.repositories;

import br.unipar.scea_api.models.Grupo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GrupoRepository extends JpaRepository<Grupo, Long> {

//    Optional<Grupo> findByIdadeInicialLessThanEqualAndIdadeLimiteGreaterThanEqual(int idade);

    @Query("SELECT g FROM Grupo g WHERE :idade BETWEEN g.idadeInicial AND g.idadeLimite")
    Optional<Grupo> findGrupoByIdade(@Param("idade") int idade);


}
