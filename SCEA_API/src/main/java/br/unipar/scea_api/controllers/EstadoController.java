package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Estado;
import br.unipar.scea_api.services.EstadoService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Tag(name = "Estado")
@Controller
@RequestMapping("/estado")
public class EstadoController {

    @Autowired
    private EstadoService estadoService;

    @GetMapping
    public String listarEstados(ModelMap model){
        List<Estado> estados = estadoService.findAll();
        model.addAttribute("estados", estados);
        return "estados";
    }
}
