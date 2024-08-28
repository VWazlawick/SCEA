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
    @OneToOne
    private Pessoa pessoa;

    @NotNull
    @Column(nullable = false)
    private Date dtNascimento;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "profissional_id", referencedColumnName = "id")
    private Profissional professor;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "tipo_servico_id", referencedColumnName = "id")
    private TipoServico aula;

    @NotNull
    @OneToOne
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;

    @OneToMany(mappedBy = "aluno", cascade = CascadeType.ALL)
    private List<Avaliacao> avaliacaos;
}
