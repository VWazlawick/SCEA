package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Aluno;
import br.unipar.scea_api.repositories.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    public Aluno insert(Aluno aluno){
        alunoRepository.save(aluno);
        return aluno;
    }

    public Aluno update(Aluno aluno){
        alunoRepository.save(aluno);
        return aluno;
    }

    public void delete(Long id){
        alunoRepository.deleteById(id);
    }

    public Aluno findById(Long id){
        Optional<Aluno> aluno = alunoRepository.findById(id);
        return aluno.orElse(null);
    }

    public List<Aluno> findAll(){
        return alunoRepository.findAll();
    }
}
