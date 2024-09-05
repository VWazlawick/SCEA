package br.unipar.scea_api.models;

import jakarta.annotation.Nullable;
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
@Entity(name = "Estado")
public class Estado extends DefaultModel{


    @NotBlank
    @Column(nullable = false)
    private String nome;

    @NotBlank
    @Length(min = 2, max = 2)
    @Column(nullable = false, unique = true)
    private String sigla;
}
