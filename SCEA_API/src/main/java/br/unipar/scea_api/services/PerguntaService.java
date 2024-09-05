package br.unipar.scea_api.services;

import br.unipar.scea_api.models.OpcaoPergunta;
import br.unipar.scea_api.models.Pergunta;
import br.unipar.scea_api.repositories.OpcaoPerguntaRepository;
import br.unipar.scea_api.repositories.PerguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PerguntaService {

    @Autowired
    private PerguntaRepository perguntaRepository;

    public Pergunta insert(Pergunta pergunta){
        return perguntaRepository.save(pergunta);
    }

    public Pergunta update(Pergunta pergunta){
        return perguntaRepository.save(pergunta);
    }

    public void inativar(Long id){
        Pergunta pergunta = perguntaRepository.findById(id).get();
        pergunta.setStAtivo(false);
        perguntaRepository.save(pergunta);
    }

    public void ativar(Long id){
        Pergunta pergunta = perguntaRepository.findById(id).get();
        pergunta.setStAtivo(true);
        perguntaRepository.save(pergunta);
    }

    public Pergunta findById(Long id){
        Optional<Pergunta> pergunta = perguntaRepository.findById(id);
        return pergunta.orElse(null);
    }

    public List<Pergunta> findAll(){
        return perguntaRepository.findAll();
    }
}
