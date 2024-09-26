package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.Profissional;
import br.unipar.scea_api.models.TipoUsuario;
import br.unipar.scea_api.models.Usuario;
import br.unipar.scea_api.services.AlunoService;
import br.unipar.scea_api.services.ProfissionalService;
import br.unipar.scea_api.services.TipoUsuarioService;
import br.unipar.scea_api.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private TipoUsuarioService tipoUsuarioService;

    @Autowired
    private ProfissionalService profissionalService;

    @Autowired
    private AlunoService alunoService;

    @PostMapping
    public String insert(@ModelAttribute Usuario usuario){
        usuarioService.insert(usuario);
        return "redirect:/usuario";
    }

    @GetMapping
    public String findAll(ModelMap model) {
        List<Usuario> usuarios = usuarioService.findAll();
        model.addAttribute("usuarios", usuarios);

        return "/usuario/listagem";
    }

    @GetMapping("/cadastrar")
    public String cadastrar(ModelMap model) {
        Usuario usuario = new Usuario();
        List<TipoUsuario> tipoUsuarios = tipoUsuarioService.findAll();
        List<Profissional> profissionais = profissionalService.findAll();
        if(tipoUsuarios==null){
            tipoUsuarios = new ArrayList<>();
        }
        if(profissionais==null){
            profissionais = new ArrayList<>();
        }

        model.addAttribute("usuario", usuario);
        model.addAttribute("tipoUsuarios", tipoUsuarios);
        model.addAttribute("profissionais", profissionais);

        return "/usuario/cadastro";
    }



}
