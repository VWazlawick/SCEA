package br.unipar.scea_api.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "TipoServico")
public class TipoServico extends DefaultModel{

    @NotBlank
    @Length(min = 1, max = 50)
    @Column(nullable = false)
    private String descricao;


    @OneToMany(mappedBy = "aula")
    private List<Aluno> alunos;
}
