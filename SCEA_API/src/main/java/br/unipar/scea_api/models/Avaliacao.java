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
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    private String resultado;

    @OneToMany
    private List<Grupo> grupos;

    @OneToMany
    private List<Pergunta>perguntas;

    @ManyToOne
    private Aluno aluno;

}
