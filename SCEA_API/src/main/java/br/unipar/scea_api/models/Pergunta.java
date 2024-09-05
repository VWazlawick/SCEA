package br.unipar.scea_api.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class Pergunta extends DefaultModel{

    @NotBlank
    @Column(nullable = false)
    private String descricao;

    @NotNull
    @Column(nullable = false)
    private int pesoPergunta;

    @NotBlank
    @ManyToOne
    @JoinColumn(nullable = false)
    private TipoPergunta tipoPergunta;

    @NotBlank
    @ManyToOne
    @JoinColumn(nullable = false)
    private SubGrupo subGrupos;
}
