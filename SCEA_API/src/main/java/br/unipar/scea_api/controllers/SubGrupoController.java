package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.SubGrupo;
import br.unipar.scea_api.services.SubGrupoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Tag(name = "SubGrupo")
@Controller
@RequestMapping("/subgrupo")
public class SubGrupoController {

    @Autowired
    private SubGrupoService subGrupoService;


    @GetMapping
    public String findAll(ModelMap model){
        List<SubGrupo> subGrupos = subGrupoService.findAll();
        model.addAttribute("subGrupos", subGrupos);
        return "/subGrupo/listagem";
    }

    @PostMapping
    public String insert(@ModelAttribute SubGrupo subGrupo){
        subGrupoService.insert(subGrupo);
        return "redirect:/subgrupo";
    }

    @GetMapping("/cadastrar")
    public String novoCadastro(ModelMap model){
        SubGrupo subGrupo = new SubGrupo();
        model.addAttribute("subGrupo", subGrupo);
        return "/subGrupo/cadastro";
    }
}
