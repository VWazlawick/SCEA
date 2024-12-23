package br.unipar.scea_api.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "OpcaoPergunta")
public class OpcaoPergunta extends DefaultModel{

    @NotBlank
    @Column(nullable = false)
    private String descricao;

    @ManyToOne
    private TipoPergunta tipoPergunta;
}
