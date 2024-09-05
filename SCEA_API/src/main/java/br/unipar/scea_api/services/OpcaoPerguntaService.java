package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Grupo;
import br.unipar.scea_api.models.OpcaoPergunta;
import br.unipar.scea_api.repositories.GrupoRepository;
import br.unipar.scea_api.repositories.OpcaoPerguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OpcaoPerguntaService {
    @Autowired
    private OpcaoPerguntaRepository opcaoPerguntaRepository;

    public OpcaoPergunta insert(OpcaoPergunta opcaoPergunta){
        return opcaoPerguntaRepository.save(opcaoPergunta);
    }

    public OpcaoPergunta update(OpcaoPergunta opcaoPergunta){
        return opcaoPerguntaRepository.save(opcaoPergunta);
    }

    public void inativar(Long id){
        OpcaoPergunta opcaoPergunta = opcaoPerguntaRepository.findById(id).get();
        opcaoPergunta.setStAtivo(false);
        opcaoPerguntaRepository.save(opcaoPergunta);
    }

    public void ativar(Long id){
        OpcaoPergunta opcaoPergunta = opcaoPerguntaRepository.findById(id).get();
        opcaoPergunta.setStAtivo(true);
        opcaoPerguntaRepository.save(opcaoPergunta);
    }

    public OpcaoPergunta findById(Long id){
        Optional<OpcaoPergunta> opcaoPergunta = opcaoPerguntaRepository.findById(id);
        return opcaoPergunta.orElse(null);
    }

    public List<OpcaoPergunta> findAll(){
        return opcaoPerguntaRepository.findAll();
    }
}
