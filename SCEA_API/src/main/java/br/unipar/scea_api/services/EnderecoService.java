package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Empresa;
import br.unipar.scea_api.models.Endereco;
import br.unipar.scea_api.repositories.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    public Endereco insert(Endereco endereco){
        return enderecoRepository.save(endereco);
    }

    public Endereco update(Endereco endereco){
        return enderecoRepository.save(endereco);
    }

    public void inativar(Long id){
        Endereco endereco = enderecoRepository.findById(id).get();
        endereco.setStAtivo(false);
        enderecoRepository.save(endereco);
    }

    public void ativar(Long id){
        Endereco endereco = enderecoRepository.findById(id).get();
        endereco.setStAtivo(true);
        enderecoRepository.save(endereco);
    }

    public Endereco findById(Long id){
        Optional<Endereco> endereco = enderecoRepository.findById(id);
        return endereco.orElse(null);
    }

    public List<Endereco> findAll(){
        return enderecoRepository.findAll();
    }
}
