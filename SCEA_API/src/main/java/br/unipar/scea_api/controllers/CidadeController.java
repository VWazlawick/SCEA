package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Cidade;
import br.unipar.scea_api.models.Estado;
import br.unipar.scea_api.services.CidadeService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Cidade")
@Controller
@RequestMapping
public class CidadeController {

    @Autowired
    private CidadeService cidadeService;

    @GetMapping
    public String listarCidade(ModelMap model){
        List<Cidade> cidades = cidadeService.findAll();
        model.addAttribute("cidades", cidades);
        return "cidades";
    }


}
