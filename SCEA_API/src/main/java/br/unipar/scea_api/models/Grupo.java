package br.unipar.scea_api.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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
@Entity(name = "Grupo")
public class Grupo extends DefaultModel{

    @NotBlank
    @Column(nullable = false)
    private String descricao;

    @NotNull
    @Column(nullable = false, length = 2)
    private int idadeInicial;

    @NotNull
    @Column(nullable = false,length = 2)
    private int idadeLimite;
    
    @ManyToMany
    private List<SubGrupo> subGrupos;

}
