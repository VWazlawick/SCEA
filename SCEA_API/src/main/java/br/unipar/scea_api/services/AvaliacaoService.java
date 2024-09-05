package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Aluno;
import br.unipar.scea_api.models.Avaliacao;
import br.unipar.scea_api.repositories.AvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AvaliacaoService {

    @Autowired
    public AvaliacaoRepository avaliacaoRepository;

    public Avaliacao insert(Avaliacao avaliacao){
        return avaliacaoRepository.save(avaliacao);
    }

    public Avaliacao update(Avaliacao avaliacao){
        return avaliacaoRepository.save(avaliacao);
    }

    public void inativar(Long id){
        Avaliacao avaliacao = avaliacaoRepository.findById(id).get();
        avaliacao.setStAtivo(false);
        avaliacaoRepository.save(avaliacao);
    }

    public void ativar(Long id){
        Avaliacao avaliacao = avaliacaoRepository.findById(id).get();
        avaliacao.setStAtivo(true);
        avaliacaoRepository.save(avaliacao);
    }

    public Avaliacao findById(Long id){
        Optional<Avaliacao> avaliacao = avaliacaoRepository.findById(id);
        return avaliacao.orElse(null);
    }

    public List<Avaliacao> findAll(){
        return avaliacaoRepository.findAll();
    }
}
