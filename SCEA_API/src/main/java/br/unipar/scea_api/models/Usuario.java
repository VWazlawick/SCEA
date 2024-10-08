package br.unipar.scea_api.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Usuario")
public class Usuario extends DefaultModel{

    @NotBlank
    @Length(min = 5, max = 20)
    @Column(nullable = false)
    private String nome;

    @NotBlank
    @Length(min = 8, max = 128)
    @Column(nullable = false)
    private String email;

    @NotBlank
    @Length(min = 6, max = 64)
    @Column(nullable = false)
    private String senha;

    @NotNull
    @ManyToOne
    @JoinColumn(nullable = false)
    private TipoUsuario tpUsuario;

    @OneToOne
    @JoinColumn()
    private Profissional profissional;

    @OneToOne
    @JoinColumn()
    private Aluno aluno;
}
