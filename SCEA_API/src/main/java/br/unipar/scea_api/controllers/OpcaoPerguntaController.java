package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.OpcaoPergunta;
import br.unipar.scea_api.models.TipoPergunta;
import br.unipar.scea_api.services.OpcaoPerguntaService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Tag(name = "OpcaoPergunta")
@Controller
@RequestMapping("/opcaoPergunta")
public class OpcaoPerguntaController {

    @Autowired
    private OpcaoPerguntaService opcaoPerguntaService;


    @PostMapping("/cadastrar")
    public String insert(@ModelAttribute OpcaoPergunta opcaoPergunta){
        opcaoPerguntaService.insert(opcaoPergunta);
        return "redirect:/tipoPergunta/cadastrar";
    }

}
