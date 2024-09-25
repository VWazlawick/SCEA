package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.TipoServico;
import br.unipar.scea_api.services.TipoServicoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Tag(name="TipoServiço")
@Controller
@RequestMapping("/tiposervico")
public class TipoServicoController {

    @Autowired
    private TipoServicoService tipoServicoService;

    @PostMapping
    public String insert(@ModelAttribute TipoServico tipoServico) {
        tipoServicoService.insert(tipoServico);
        return "redirect:/tiposervico";
    }

    @GetMapping
    public String findAll(ModelMap model){
        List<TipoServico> tipoServicos = tipoServicoService.findAll();
        model.addAttribute("tipoServicos", tipoServicos);
        return "/tiposervico/listagem";
    }

    @GetMapping("/cadastrar")
    public String novoCadastro(ModelMap model){
        TipoServico tipoServico = new TipoServico();
        model.addAttribute("tipoServico", tipoServico);
        return "/tiposervico/cadastro";
    }
}
