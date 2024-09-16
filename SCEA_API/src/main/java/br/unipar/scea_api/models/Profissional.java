package br.unipar.scea_api.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
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
@Entity(name = "Profissional")
public class Profissional extends Pessoa{

    @NotNull
    @ManyToOne
    @JoinColumn(nullable = false)
    private Empresa empresa;

    @NotNull
    @OneToOne
    @JoinColumn(nullable = false)
    private Usuario usuario;

    @OneToMany
    private List<Aluno> alunos;
}
