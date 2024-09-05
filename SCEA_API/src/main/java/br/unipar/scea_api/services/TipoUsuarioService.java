package br.unipar.scea_api.services;

import br.unipar.scea_api.models.TipoServico;
import br.unipar.scea_api.models.TipoUsuario;
import br.unipar.scea_api.repositories.TipoServicoRepository;
import br.unipar.scea_api.repositories.TipoUsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TipoUsuarioService {
    @Autowired
    private TipoUsuarioRepository tipoUsuarioRepository;

    public TipoUsuario insert(TipoUsuario tipoUsuario){
        return tipoUsuarioRepository.save(tipoUsuario);
    }

    public TipoUsuario update(TipoUsuario tipoUsuario){
        return tipoUsuarioRepository.save(tipoUsuario);
    }

    public void inativar(Long id){
        TipoUsuario tipoUsuario = tipoUsuarioRepository.findById(id).get();
        tipoUsuario.setStAtivo(false);
        tipoUsuarioRepository.save(tipoUsuario);
    }

    public void ativar(Long id){
        TipoUsuario tipoUsuario = tipoUsuarioRepository.findById(id).get();
        tipoUsuario.setStAtivo(true);
        tipoUsuarioRepository.save(tipoUsuario);
    }

    public TipoUsuario findById(Long id){
        Optional<TipoUsuario> tipoUsuario = tipoUsuarioRepository.findById(id);
        return tipoUsuario.orElse(null);
    }

    public List<TipoUsuario> findAll(){
        return tipoUsuarioRepository.findAll();
    }
}
