package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Empresa;
import br.unipar.scea_api.services.EmpresaService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Tag(name="Empresa")
@Controller
@RequestMapping("/empresa")
public class EmpresaController {

    @Autowired
    private EmpresaService empresaService;

    @PostMapping
    public String insert(@ModelAttribute Empresa empresa){
        empresaService.insert(empresa);
        return "redirect:/empresa";
    }

    @GetMapping
    public String findAll(ModelMap mode){
        List<Empresa> empresas = empresaService.findAll();
        mode.addAttribute("empresas", empresas);
        return "/empresa/listagem";
    }

    @GetMapping("/cadastrar")
    public String novoCadastro(ModelMap model){
        Empresa empresa = new Empresa();
        model.addAttribute("empresa", empresa);
        return "/empresa/cadastro";
    }


}
