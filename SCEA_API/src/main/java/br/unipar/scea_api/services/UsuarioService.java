package br.unipar.scea_api.services;

import br.unipar.scea_api.models.TipoUsuario;
import br.unipar.scea_api.models.Usuario;
import br.unipar.scea_api.models.UsuarioPrincipal;
import br.unipar.scea_api.repositories.TipoServicoRepository;
import br.unipar.scea_api.repositories.TipoUsuarioRepository;
import br.unipar.scea_api.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    @Lazy
    private BCryptPasswordEncoder bCryptPasswordEncoder;

//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
//        Optional<Usuario> usuario = usuarioRepository.findByEmail(email);
//        if(usuario.isEmpty()){
//            throw new UsernameNotFoundException("Usuário não encontrado!!");
//        }
//
//        return new UsuarioPrincipal(usuario.get());
//    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        System.out.println("Attempting to load user by email: " + email); // Debug log

        Optional<Usuario> usuario = usuarioRepository.findByEmail(email);
        if(usuario.isEmpty()) {
            System.out.println("User not found with email: " + email); // Debug log
            throw new UsernameNotFoundException("Usuário não encontrado!!");
        }

        System.out.println("User found: " + usuario.get().getEmail()); // Debug log
        return new UsuarioPrincipal(usuario.get());
    }

    public Usuario insert(Usuario usuario){
        usuario.setSenha(bCryptPasswordEncoder.encode(usuario.getSenha()));
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
