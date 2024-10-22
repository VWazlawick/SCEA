package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Escala;
import br.unipar.scea_api.models.Pergunta;
import br.unipar.scea_api.models.SubGrupo;
import br.unipar.scea_api.models.TipoPergunta;
import br.unipar.scea_api.services.PerguntaService;
import br.unipar.scea_api.services.SubGrupoService;
import br.unipar.scea_api.services.TipoPerguntaService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Tag(name = "Pergunta")
@Controller
@RequestMapping("/pergunta")
public class PerguntaController {

    @Autowired
    private PerguntaService perguntaService;

    @Autowired
    private TipoPerguntaService tipoPerguntaService;

    @Autowired
    private SubGrupoService subGrupoService;

    @PostMapping
    public String insert(@ModelAttribute Pergunta pergunta) {
        perguntaService.insert(pergunta);
        return "redirect:/pergunta";
    }

    @GetMapping
    public String findAll(ModelMap model) {
        List<Pergunta> perguntas = perguntaService.findAll();
        model.addAttribute("perguntas", perguntas);

        return "/pergunta/listagem";
    }

    @GetMapping("/cadastrar")
    public String novoCadastro(ModelMap model) {
        Pergunta pergunta = new Pergunta();
        Escala escala = new Escala();

        List<TipoPergunta> tipoPerguntas = tipoPerguntaService.findAll();
        List<SubGrupo> subGrupos = subGrupoService.findAll();

        pergunta.setEscalas(new ArrayList<>());
        pergunta.getEscalas().add(escala);

        if(tipoPerguntas == null){
            tipoPerguntas = new ArrayList<>();
        }
        if(subGrupos == null){
            subGrupos = new ArrayList<>();
        }

        model.addAttribute("pergunta", pergunta);
        model.addAttribute("escala", escala);
        model.addAttribute("tipoPerguntas", tipoPerguntas);
        model.addAttribute("subGrupos", subGrupos);

        return "pergunta/cadastro";
    }
}
