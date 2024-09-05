package br.unipar.scea_api.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Pessoa extends DefaultModel{

    @NotBlank
    @Length(min = 3, max = 128)
    @Column(nullable = false)
    private String nome;

    @NotBlank
    @Length(min = 11, max = 11)
    @Column(nullable = false, length = 11)
    private String cpf;

    @NotBlank
    @Length(min = 9, max = 9)
    @Column(nullable = false, length = 9)
    private String rg;

    @NotBlank
    @Length(min = 10, max = 11)
    @Column(nullable = false)
    private String telefone;
}
