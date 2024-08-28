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
public class Grupo {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

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

    @ManyToMany
    @JoinTable(
            name = "Grupo_SubGrupo",
            joinColumns = @JoinColumn(name = "grupo_id"),
            inverseJoinColumns =  @JoinColumn(name = "sub_Grupo_id")
    )
    private List<SubGrupo> subGrupos;

    @OneToMany(mappedBy = "grupos", cascade = CascadeType.ALL)
    private List<Avaliacao> avaliacoes;
}
