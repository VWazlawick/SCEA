package br.unipar.scea_api.services;

import br.unipar.scea_api.models.OpcaoPergunta;
import br.unipar.scea_api.models.SubGrupo;
import br.unipar.scea_api.models.TipoPergunta;
import br.unipar.scea_api.repositories.OpcaoPerguntaRepository;
import br.unipar.scea_api.repositories.SubGrupoRepository;
import br.unipar.scea_api.repositories.TipoPerguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TipoPerguntaService {

    @Autowired
    private TipoPerguntaRepository tipoPerguntaRepository;

    @Autowired
    private OpcaoPerguntaRepository opcaoPerguntaRepository;

    public void insert(TipoPergunta tipoPergunta){
        tipoPerguntaRepository.save(tipoPergunta);

        if(tipoPergunta.getOpcoes() != null){
            List<OpcaoPergunta> opcoes = tipoPergunta.getOpcoes();
            for(int i = 0;i<opcoes.size();i++){
                opcoes.get(i).setTipoPergunta(tipoPergunta);
            }

            opcaoPerguntaRepository.saveAll(opcoes);
        }
    }

    public TipoPergunta update(TipoPergunta tipoPergunta){
        return tipoPerguntaRepository.save(tipoPergunta);
    }

    public void inativar(Long id){
        TipoPergunta tipoPergunta = tipoPerguntaRepository.findById(id).get();
        tipoPergunta.setStAtivo(false);
        tipoPerguntaRepository.save(tipoPergunta);
    }

    public void ativar(Long id){
        TipoPergunta tipoPergunta = tipoPerguntaRepository.findById(id).get();
        tipoPergunta.setStAtivo(true);
        tipoPerguntaRepository.save(tipoPergunta);
    }

    public TipoPergunta findById(Long id){
        Optional<TipoPergunta> tipoPergunta = tipoPerguntaRepository.findById(id);
        return tipoPergunta.orElse(null);
    }

    public List<TipoPergunta> findAll(){
        return tipoPerguntaRepository.findAll();
    }
}
