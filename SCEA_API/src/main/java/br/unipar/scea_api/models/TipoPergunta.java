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
@Entity(name = "TipoPergunta")
public class TipoPergunta extends DefaultModel{

    @NotBlank
    @Column(nullable = false)
    private String descricao;

    @OneToMany
    private List<OpcaoPergunta> opcoes;
}
