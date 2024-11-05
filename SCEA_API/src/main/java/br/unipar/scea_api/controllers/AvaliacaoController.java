package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Aluno;
import br.unipar.scea_api.models.Avaliacao;
import br.unipar.scea_api.models.Pergunta;
import br.unipar.scea_api.services.AlunoService;
import br.unipar.scea_api.services.AvaliacaoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Tag(name = "Avaliação")
@Controller
@RequestMapping("/avaliacao")
public class AvaliacaoController {

    @Autowired
    private AvaliacaoService avaliacaoService;

    @Autowired
    private AlunoService alunoService;


    @GetMapping
    public String avaliacao(ModelMap model) {
        Avaliacao avaliacao = new Avaliacao();
        List<Aluno> alunos = alunoService.findAll();

        model.addAttribute("avaliacao", avaliacao);
        model.addAttribute("alunos", alunos);
        model.addAttribute("perguntas", null);

        return "/avaliacao/avaliacao";
    }

    @GetMapping("/listarperguntas")
    public String listarPerguntas(@RequestParam("alunoId") Long alunoId, ModelMap model) {
        Aluno aluno = alunoService.findById(alunoId);

        if(aluno == null){
            model.addAttribute("errorMessage", "Aluno não encontrar");
            return "/error";
        }

        List<Pergunta> perguntas = avaliacaoService.getPerguntas(aluno.getId());

        model.addAttribute("alunoId", alunoId);
        model.addAttribute("perguntas", perguntas);
        model.addAttribute("aluno", aluno);

        return "/avaliacao/avaliacao";
    }


}
