package br.unipar.scea_api.models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name="AvaliacaoPergunta")
public class AvaliacaoPergunta extends DefaultModel{

    @ManyToOne
    @JoinColumn
    private Avaliacao avaliacao;

    @ManyToOne
    @JoinColumn
    private Pergunta pergunta;

    @Column(nullable = false)
    private String resposta;
}
