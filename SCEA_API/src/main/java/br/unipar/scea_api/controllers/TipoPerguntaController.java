package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.OpcaoPergunta;
import br.unipar.scea_api.models.SubGrupo;
import br.unipar.scea_api.models.TipoPergunta;
import br.unipar.scea_api.services.OpcaoPerguntaService;
import br.unipar.scea_api.services.TipoPerguntaService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;

@Tag(name = "TipoPergunta")
@Controller
@RequestMapping("/tipopergunta")
public class TipoPerguntaController {

    @Autowired
    private TipoPerguntaService tipoPerguntaService;

    @Autowired
    private OpcaoPerguntaService opcaoPerguntaService;

    @GetMapping
    public String findAll(ModelMap model){
        List<TipoPergunta> tiposPergunta = tipoPerguntaService.findAll();
        model.addAttribute("tiposPergunta", tiposPergunta);
        return "/tipoPergunta/listagem";
    }

    @PostMapping
    public String insert(@ModelAttribute TipoPergunta tipoPergunta){
        tipoPerguntaService.insert(tipoPergunta);
        return "redirect:/tipoPergunta";
    }

    @GetMapping("/cadastrar")
    public String novoCadastro(ModelMap model){
        TipoPergunta tipoPergunta = new TipoPergunta();

        OpcaoPergunta opcao = new OpcaoPergunta();
        tipoPergunta.setOpcoes(new ArrayList<>());
        tipoPergunta.getOpcoes().add(opcao);

        model.addAttribute("tipoPergunta", tipoPergunta);
        model.addAttribute("opcao", opcao);

        return "/tipoPergunta/cadastro";
    }

    @PostMapping("/opcaoPergunta/cadastrar")
    public String insertOpcao(@ModelAttribute OpcaoPergunta opcaoPergunta){
        opcaoPerguntaService.insert(opcaoPergunta);

        return "redirect:/tipoPergunta/cadastrar";
    }

    @GetMapping("/editar/{id}")
    public String update(@PathVariable Long id, ModelMap model){
        TipoPergunta tipoPergunta = tipoPerguntaService.findById(id);

        model.addAttribute("tipoPergunta", tipoPergunta);

        return "tipoPergunta/cadastro";
    }
}
