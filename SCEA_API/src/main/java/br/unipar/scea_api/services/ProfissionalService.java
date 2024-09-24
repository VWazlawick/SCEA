package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Pessoa;
import br.unipar.scea_api.models.Profissional;
import br.unipar.scea_api.repositories.PessoaRepository;
import br.unipar.scea_api.repositories.ProfissionalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfissionalService {

    @Autowired
    private ProfissionalRepository profissionalRepository;

    public Profissional insert(Profissional profissional){
        if(profissional.getCpf()!=null && profissional.getRg()!=null && profissional.getTelefone()!=null){
            String cpf = profissional.getCpf().replaceAll("[^0-9]", "");
            String rg = profissional.getRg().replaceAll("[^0-9]", "");
            String telefone = profissional.getTelefone().replaceAll("[^0-9]", "");
            profissional.setCpf(cpf);
            profissional.setRg(rg);
            profissional.setTelefone(telefone);
        }
        return profissionalRepository.save(profissional);
    }

    public Profissional update(Profissional profissional){
        return profissionalRepository.save(profissional);
    }

    public void inativar(Long id){
        Profissional profissional = profissionalRepository.findById(id).get();
        profissional.setStAtivo(false);
        profissionalRepository.save(profissional);
    }

    public void ativar(Long id){
        Profissional profissional = profissionalRepository.findById(id).get();
        profissional.setStAtivo(true);
        profissionalRepository.save(profissional);
    }

    public Profissional findById(Long id){
        Optional<Profissional> profissional = profissionalRepository.findById(id);
        return profissional.orElse(null);
    }

    public List<Profissional> findAll(){
        return profissionalRepository.findAll();
    }
}
