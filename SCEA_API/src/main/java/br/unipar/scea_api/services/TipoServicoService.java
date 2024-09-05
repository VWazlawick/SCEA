package br.unipar.scea_api.services;

import br.unipar.scea_api.models.TipoPergunta;
import br.unipar.scea_api.models.TipoServico;
import br.unipar.scea_api.repositories.TipoPerguntaRepository;
import br.unipar.scea_api.repositories.TipoServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TipoServicoService {

    @Autowired
    private TipoServicoRepository tipoServicoRepository;

    public TipoServico insert(TipoServico tipoServico){
        return tipoServicoRepository.save(tipoServico);
    }

    public TipoServico update(TipoServico tipoServico){
        return tipoServicoRepository.save(tipoServico);
    }

    public void inativar(Long id){
        TipoServico tipoServico = tipoServicoRepository.findById(id).get();
        tipoServico.setStAtivo(false);
        tipoServicoRepository.save(tipoServico);
    }

    public void ativar(Long id){
        TipoServico tipoServico = tipoServicoRepository.findById(id).get();
        tipoServico.setStAtivo(true);
        tipoServicoRepository.save(tipoServico);
    }

    public TipoServico findById(Long id){
        Optional<TipoServico> tipoServico = tipoServicoRepository.findById(id);
        return tipoServico.orElse(null);
    }

    public List<TipoServico> findAll(){
        return tipoServicoRepository.findAll();
    }
}
