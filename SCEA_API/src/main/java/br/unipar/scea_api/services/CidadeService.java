package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Cidade;
import br.unipar.scea_api.repositories.CidadeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void delete(Long id){
        cidadeRepository.deleteById(id);
    }

    public Cidade findById(Long id){
        Optional<Cidade> cidade = cidadeRepository.findById(id);
        return cidade.orElse(null);
    }
}
