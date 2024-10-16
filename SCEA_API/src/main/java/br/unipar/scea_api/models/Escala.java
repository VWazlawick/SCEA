package br.unipar.scea_api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "Pergunta")
public class Escala extends DefaultModel{

    private double escalaMin;

    private double escalaMax;

    private String status;

    @ManyToOne
    private Pergunta pergunta;
}
