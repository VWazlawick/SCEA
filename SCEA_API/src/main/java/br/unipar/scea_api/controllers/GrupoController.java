package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Empresa;
import br.unipar.scea_api.models.Grupo;
import br.unipar.scea_api.models.SubGrupo;
import br.unipar.scea_api.services.GrupoService;
import br.unipar.scea_api.services.SubGrupoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Tag(name = "Grupo")
@Controller
@RequestMapping("/grupo")
public class GrupoController {

    @Autowired
    private GrupoService grupoService;

    @Autowired
    private SubGrupoService subGrupoService;

    @GetMapping
    public String findAll(ModelMap model) {
        List<Grupo> grupos = grupoService.findAll();
        model.addAttribute("grupos", grupos);
        return "/grupo/listagem";
    }

    @PostMapping
    public String insert(@ModelAttribute Grupo grupo, @RequestParam List<Long> subGrupos) {
        grupoService.insert(grupo, subGrupos);
        return "redirect:/grupo";
    }

    @GetMapping("/cadastrar")
    public String novoCadastro(ModelMap model) {
        Grupo grupo = new Grupo();
        List<SubGrupo> subGrupos = subGrupoService.findAll();

        if(subGrupos.isEmpty()) {
            subGrupos = new ArrayList<>();
        }

        model.addAttribute("grupo", grupo);
        model.addAttribute("subGrupos", subGrupos);

        return "/grupo/cadastro";
    }

    @GetMapping("/editar/{id}")
    public String update(@PathVariable Long id, ModelMap model){
        Grupo grupo = grupoService.findById(id);

        List<SubGrupo> subGrupos = subGrupoService.findAll();
        if(subGrupos.isEmpty()) {
            subGrupos = new ArrayList<>();
        }

        model.addAttribute("grupo", grupo);
        model.addAttribute("subGrupos", subGrupos);

        return "grupo/cadastro";
    }
}
