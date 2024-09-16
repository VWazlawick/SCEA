package br.unipar.scea_api.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Aluno")
public class Aluno extends Pessoa{

    @NotNull
    @Column(nullable = false)
    private LocalDate dtNascimento;

    @NotNull
    @Column(nullable = false)
    private LocalDate dtInicio;

    @NotNull
    @ManyToOne
    @JoinColumn(nullable = false)
    private Profissional professor;

    @NotNull
    @ManyToOne
    @JoinColumn(nullable = false)
    private TipoServico aula;

    @NotNull
    @OneToOne
    private Endereco endereco;

    private double peso;

    private double altura;

    private double cintura;

    private double envergadura;

    private String nmResponsavel;
}
