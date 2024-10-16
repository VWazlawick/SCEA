package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Pergunta;
import br.unipar.scea_api.services.PerguntaService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Tag(name = "Pergunta")
@Controller
@RequestMapping("/pergunta")
public class PerguntaController {

    @Autowired
    private PerguntaService perguntaService;

    @PostMapping
    public String insert(@RequestBody Pergunta pergunta) {
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
        model.addAttribute("pergunta", pergunta);
        return "/pergunta/cadastro";
    }
}
