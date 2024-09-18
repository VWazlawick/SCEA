package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.*;
import br.unipar.scea_api.services.AlunoService;
import br.unipar.scea_api.services.CidadeService;
import br.unipar.scea_api.services.ProfissionalService;
import br.unipar.scea_api.services.TipoServicoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;


@Tag(name = "Aluno")
@Controller
@RequestMapping("/aluno")
public class AlunoController {

    @Autowired
    private AlunoService alunoService;

    @Autowired
    private TipoServicoService tipoServicoService;

    @Autowired
    private ProfissionalService profissionalService;

    @Autowired
    private CidadeService cidadeService;

    @PostMapping
    public String insert(@ModelAttribute Aluno aluno){
        alunoService.insert(aluno);
        return "redirect:/aluno";
    }

    @GetMapping
    public String findAll(ModelMap model){
        List<Aluno> alunos = alunoService.findAll();
        model.addAttribute("alunos", alunos);

        return "/aluno/listagem";
    }

    @GetMapping("/cadastrar")
    public String novoCadastro(ModelMap model){
        List<Profissional> professores = profissionalService.findAll();
        List<TipoServico> aulas = tipoServicoService.findAll();
        if(professores == null){
            professores = new ArrayList<>();
        }
        if(aulas == null){
            aulas = new ArrayList<>();
        }

        Aluno aluno = new Aluno();
        Estado estado = new Estado();
        Cidade cidade = new Cidade();
        Endereco endereco = new Endereco();

        cidade.setEstado(estado);
        endereco.setCidade(cidade);
        aluno.setEndereco(endereco);

        model.addAttribute("aulas", aulas);
        model.addAttribute("professores", professores);
        model.addAttribute("aluno", aluno);

        return "aluno/cadastro";
    }

    @GetMapping("/editar/{id}")
    public String update(@PathVariable Long id, ModelMap model){
        Aluno aluno = alunoService.findById(id);
        List<Profissional> professores = profissionalService.findAll();
        List<TipoServico> aulas = tipoServicoService.findAll();
        if(professores == null){
            professores = new ArrayList<>();
        }
        if(aulas == null){
            aulas = new ArrayList<>();
        }

        model.addAttribute("aulas", aulas);
        model.addAttribute("professores", professores);
        model.addAttribute("aluno", aluno);
        return "aluno/cadastro";
    }

    @PostMapping("/buscarEstado")
    @ResponseBody
    public Long buscarEstado(@RequestParam("cidadeId") Long id){
        Cidade cidade = cidadeService.findById(id);
        Estado estado = cidade.getEstado();
        return estado.getId();
    }
}
