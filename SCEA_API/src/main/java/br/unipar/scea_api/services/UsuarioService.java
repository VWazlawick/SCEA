package br.unipar.scea_api.services;

import br.unipar.scea_api.models.TipoUsuario;
import br.unipar.scea_api.models.Usuario;
import br.unipar.scea_api.repositories.TipoServicoRepository;
import br.unipar.scea_api.repositories.TipoUsuarioRepository;
import br.unipar.scea_api.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario insert(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    public Usuario update(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    public void inativar(Long id){
        Usuario usuario = usuarioRepository.findById(id).get();
        usuario.setStAtivo(false);
        usuarioRepository.save(usuario);
    }

    public void ativar(Long id){
        Usuario usuario = usuarioRepository.findById(id).get();
        usuario.setStAtivo(true);
        usuarioRepository.save(usuario);
    }

    public Usuario findById(Long id){
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        return usuario.orElse(null);
    }

    public List<Usuario> findAll(){
        return usuarioRepository.findAll();
    }
}
