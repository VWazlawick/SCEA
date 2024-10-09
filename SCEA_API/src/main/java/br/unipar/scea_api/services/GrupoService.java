package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Endereco;
import br.unipar.scea_api.models.Estado;
import br.unipar.scea_api.models.Grupo;
import br.unipar.scea_api.models.SubGrupo;
import br.unipar.scea_api.repositories.EstadoRepository;
import br.unipar.scea_api.repositories.GrupoRepository;
import br.unipar.scea_api.repositories.SubGrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GrupoService {

    @Autowired
    private GrupoRepository grupoRepository;

    @Autowired
    private SubGrupoRepository subGrupoRepository;

    public Grupo insert(Grupo grupo, List<Long> subGrupoIds){
        List<SubGrupo>subGrupos = subGrupoRepository.findAllById(subGrupoIds);
        grupo.setSubGrupos(subGrupos);

        return grupoRepository.save(grupo);
    }

    public Grupo update(Grupo grupo){
        return grupoRepository.save(grupo);
    }

    public void inativar(Long id){
        Grupo grupo = grupoRepository.findById(id).get();
        grupo.setStAtivo(false);
        grupoRepository.save(grupo);
    }

    public void ativar(Long id){
        Grupo grupo = grupoRepository.findById(id).get();
        grupo.setStAtivo(true);
        grupoRepository.save(grupo);
    }

    public Grupo findById(Long id){
        Optional<Grupo> grupo = grupoRepository.findById(id);
        return grupo.orElse(null);
    }

    public List<Grupo> findAll(){
        return grupoRepository.findAll();
    }

}
