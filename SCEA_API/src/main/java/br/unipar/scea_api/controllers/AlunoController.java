package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Aluno;
import br.unipar.scea_api.services.AlunoService;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;


@Tag(name = "Aluno")
@Controller
@RequestMapping("/aluno")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @GetMapping
    public ModelAndView listarAlunos(ModelMap model){
        model.addAttribute("alunos", alunoService.findAll());

        ModelAndView modelAndView = new ModelAndView("aluno/inserir");

        return modelAndView;
    }

}
