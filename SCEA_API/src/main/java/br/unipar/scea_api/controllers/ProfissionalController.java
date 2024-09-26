package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Empresa;
import br.unipar.scea_api.models.Profissional;
import br.unipar.scea_api.services.EmpresaService;
import br.unipar.scea_api.services.ProfissionalService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Tag(name = "Profissional")
@Controller
@RequestMapping("/profissional")
public class ProfissionalController {

    @Autowired
    private ProfissionalService profissionalService;

    @Autowired
    private EmpresaService empresaService;


    @PostMapping
    public String insert(@ModelAttribute Profissional profissional){
        profissionalService.insert(profissional);
        return "redirect:/profissional";
    }

    @GetMapping
    public String findAll(ModelMap model){
        List<Profissional> profissionais = profissionalService.findAll();
        model.addAttribute("profissionais", profissionais);
        return "/profissional/listagem";
    }

    @GetMapping("/cadastrar")
    public String novoCadastro(ModelMap model){
        Profissional profissional = new Profissional();
        List<Empresa> empresas = empresaService.findAll();

        if(empresas==null){
            empresas = new ArrayList<>();
        }

        model.addAttribute("profissional", profissional);
        model.addAttribute("empresas", empresas);
        return "/profissional/cadastro";
    }

    @GetMapping("/buscarNome")
    @ResponseBody
    public List<Profissional> findByNome(@RequestParam String nome){
            return profissionalService.findByNome(nome);
    }
}
