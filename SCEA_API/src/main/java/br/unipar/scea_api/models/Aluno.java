package br.unipar.scea_api.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Aluno {

    @Id
    @OneToOne
    private Pessoa pessoa;

    @NotBlank
    @Column(nullable = false)
    private Date dtNascimento;

    @NotBlank
    @OneToOne
    @JoinColumn(name = "profissional_id", referencedColumnName = "id")
    private Profissional professor;

    @NotBlank
    @OneToOne
    @JoinColumn(name = "tipo_servico_id", referencedColumnName = "id")
    private TipoServico aula;

    @NotBlank
    @OneToOne
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;

}
