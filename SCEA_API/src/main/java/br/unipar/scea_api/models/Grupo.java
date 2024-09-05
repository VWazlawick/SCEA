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
@Entity
public class Grupo extends DefaultModel{

    @NotBlank
    @Column(nullable = false)
    private String descricao;

    @NotBlank
    @Length(min =  1, max = 2)
    @Column(nullable = false, length = 2)
    private int IdadeInicial;

    @NotBlank
    @Length(min =  1, max = 2)
    @Column(nullable = false,length = 2)
    private int IdadeLimite;

    @NotBlank
    @OneToMany
    private List<SubGrupo> subGrupos;

}
