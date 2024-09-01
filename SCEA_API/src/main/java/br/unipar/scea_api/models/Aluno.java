package br.unipar.scea_api.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Aluno {

    @Id
    private Long id;

    @MapsId
    @OneToOne
    private Pessoa pessoa;

    @NotNull
    @Column(nullable = false)
    private Date dtNascimento;

    @NotNull
    @Column(nullable = false)
    private Date dtInicio;

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
}
