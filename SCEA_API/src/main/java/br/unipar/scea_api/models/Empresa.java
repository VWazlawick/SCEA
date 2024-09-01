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
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotBlank
    @Length(min = 5, max = 128)
    @Column(nullable = false)
    private String razaoSocial;

    @Length(min = 5, max = 128)
    private String nomeFantasia;

    @NotBlank
    @Length(min = 14, max = 14)
    @Column(unique = true, nullable = false)
    private String cnpj;
}
