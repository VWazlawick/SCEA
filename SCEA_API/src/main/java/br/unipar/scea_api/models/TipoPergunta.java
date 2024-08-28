package br.unipar.scea_api.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
public class TipoPergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @NotBlank
    @Column(nullable = false)
    private String descricao;

    @OneToMany(mappedBy = "tipoPergunta", cascade = CascadeType.ALL)
    private List<Pergunta> perguntas;

    @OneToMany(mappedBy = "tipoPergunta", cascade = CascadeType.ALL)
    private List<OpcaoPergunta> opcoes;
}
