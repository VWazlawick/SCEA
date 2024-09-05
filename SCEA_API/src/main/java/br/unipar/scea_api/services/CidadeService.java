package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Aluno;
import br.unipar.scea_api.models.Cidade;
import br.unipar.scea_api.repositories.CidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CidadeService {

    @Autowired
    private CidadeRepository cidadeRepository;

    public Cidade insert(Cidade cidade){
        return cidadeRepository.save(cidade);
    }

    public Cidade update(Cidade cidade){
        return cidadeRepository.save(cidade);
    }

    public void inativar(Long id){
        Cidade cidade = cidadeRepository.findById(id).get();
        cidade.setStAtivo(false);
        cidadeRepository.save(cidade);
    }

    public void ativar(Long id){
        Cidade cidade = cidadeRepository.findById(id).get();
        cidade.setStAtivo(true);
        cidadeRepository.save(cidade);
    }

    public Cidade findById(Long id){
        Optional<Cidade> cidade = cidadeRepository.findById(id);
        return cidade.orElse(null);
    }

    public List<Cidade> findAll(){
        return cidadeRepository.findAll();
    }
}
