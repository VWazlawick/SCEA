package br.unipar.scea_api.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Cidade extends DefaultModel{

    @NotBlank
    @Column(nullable = false)
    private String nome;

    @NotNull
    @ManyToOne
    private Estado estado;
}
