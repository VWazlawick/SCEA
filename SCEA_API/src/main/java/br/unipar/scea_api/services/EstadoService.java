package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Endereco;
import br.unipar.scea_api.models.Estado;
import br.unipar.scea_api.repositories.EstadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EstadoService {

    @Autowired
    private EstadoRepository estadoRepository;

    public Estado insert(Estado estado){
        return estadoRepository.save(estado);
    }

    public Estado update(Estado estado){
        return estadoRepository.save(estado);
    }

    public void delete(Long id){
        estadoRepository.deleteById(id);
    }

    public Estado findById(Long id){
        Optional<Estado> estado = estadoRepository.findById(id);
        return estado.orElse(null);
    }

    public List<Estado> findAll(){
        return estadoRepository.findAll();
    }

    public void inativar(Long id){
        Estado estado = estadoRepository.findById(id).get();
        estado.setStAtivo(false);
        estadoRepository.save(estado);
    }
}
