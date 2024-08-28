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
@Entity
public class OpcaoPergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @NotBlank
    @Column(nullable = false)
    private String descricao;

    @NotBlank
    @Column(nullable = false)
    private int escalaMin;

    @NotBlank
    @Column(nullable = false)
    private int escalaMax;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "tipoPergunta_id", referencedColumnName = "id")
    private TipoPergunta tipoPergunta;

}
