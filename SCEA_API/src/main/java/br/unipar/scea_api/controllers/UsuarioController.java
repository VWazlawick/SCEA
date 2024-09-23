package br.unipar.scea_api.controllers;

import br.unipar.scea_api.models.TipoUsuario;
import br.unipar.scea_api.models.Usuario;
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
        if(tipoUsuarios==null){
            tipoUsuarios = new ArrayList<TipoUsuario>();
        }

        model.addAttribute("usuario", usuario);
        model.addAttribute("tipoUsuarios", tipoUsuarios);

        return "usuario/cadastro";
    }



}
