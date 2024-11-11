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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

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
    public ModelAndView avaliacao(@RequestParam(value="alunoId", required = false) Long alunoId, ModelMap model) {
        Avaliacao avaliacao = new Avaliacao();
        List<Aluno> alunos = alunoService.findAll();
        ModelAndView mv = new ModelAndView("/avaliacao/avaliacao");

        mv.addObject("avaliacao", avaliacao);
        mv.addObject("alunos", alunos);
        mv.addObject("alunoId", alunoId);

        if(alunoId != null){
            Aluno aluno = alunoService.findById(alunoId);
            avaliacao.setAluno(aluno);
            List<Pergunta> perguntas = avaliacaoService.getPerguntas(aluno.getId());

            mv.addObject("aluno", aluno);
            mv.addObject("perguntas", perguntas);
        }

        return mv;
    }

    @PostMapping
    public String insert(){
        return null;
    }



}
