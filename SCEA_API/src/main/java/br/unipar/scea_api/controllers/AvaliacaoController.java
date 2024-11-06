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

        if(alunoId != null){
            Aluno aluno = alunoService.findById(alunoId);
            List<Pergunta> perguntas = avaliacaoService.getPerguntas(aluno.getId());

            mv.addObject("aluno", aluno);
            mv.addObject("perguntas", perguntas);
        }

        return mv;
    }

//    @GetMapping()
//    public ModelAndView listarPerguntas(@RequestParam("alunoId") Long alunoId, ModelMap model) {
//        Aluno aluno = alunoService.findById(alunoId);
//        ModelAndView mv = new ModelAndView("/avaliacao/avaliacao");
//
//        if(aluno == null){
//            model.addAttribute("errorMessage", "Aluno não encontrar");
//            return mv;
//        }
//
//        List<Pergunta> perguntas = avaliacaoService.getPerguntas(aluno.getId());
//
//        mv.addObject("alunoId", alunoId);
//        mv.addObject("perguntas", perguntas);
//        mv.addObject("aluno", model.getAttribute("aluno"));
//
//
//
//        return mv;
//    }


}
