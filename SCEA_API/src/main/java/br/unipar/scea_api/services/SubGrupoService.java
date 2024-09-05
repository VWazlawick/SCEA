package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Profissional;
import br.unipar.scea_api.models.SubGrupo;
import br.unipar.scea_api.repositories.ProfissionalRepository;
import br.unipar.scea_api.repositories.SubGrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubGrupoService {

    @Autowired
    private SubGrupoRepository subGrupoRepository;

    public SubGrupo insert(SubGrupo subGrupo){
        return subGrupoRepository.save(subGrupo);
    }

    public SubGrupo update(SubGrupo subGrupo){
        return subGrupoRepository.save(subGrupo);
    }

    public void inativar(Long id){
        SubGrupo subGrupo = subGrupoRepository.findById(id).get();
        subGrupo.setStAtivo(false);
        subGrupoRepository.save(subGrupo);
    }

    public void ativar(Long id){
        SubGrupo subGrupo = subGrupoRepository.findById(id).get();
        subGrupo.setStAtivo(true);
        subGrupoRepository.save(subGrupo);
    }

    public SubGrupo findById(Long id){
        Optional<SubGrupo> subGrupo = subGrupoRepository.findById(id);
        return subGrupo.orElse(null);
    }

    public List<SubGrupo> findAll(){
        return subGrupoRepository.findAll();
    }
}
