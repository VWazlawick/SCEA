package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Profissional;
import br.unipar.scea_api.services.ProfissionalService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Tag(name = "Profissional")
@Controller
@RequestMapping("/profissional")
public class ProfissionalController {

    @Autowired
    private ProfissionalService profissionalService;


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
        model.addAttribute("profissional", profissional);
        return "/profissional/cadastro";
    }


}
