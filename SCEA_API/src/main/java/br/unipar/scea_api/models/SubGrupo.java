package br.unipar.scea_api.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class SubGrupo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    private String descricao;

    @ManyToMany(mappedBy = "subgrupos")
    private List<Grupo> grupos;

    @ManyToMany
    @JoinTable(
            name = "SubGrupo_Pergunta",
            joinColumns = @JoinColumn(name = "Sub_grupo_id"),
            inverseJoinColumns =  @JoinColumn(name = "pergunta_id")
    )
    private List<Pergunta> perguntas;
}
