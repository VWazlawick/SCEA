package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Aluno;
import br.unipar.scea_api.models.Endereco;
import br.unipar.scea_api.repositories.AlunoRepository;
import br.unipar.scea_api.repositories.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private EnderecoRepository enderecoRepository;

    public Aluno insert(Aluno aluno){
        if(aluno.getEndereco()!=null && aluno.getEndereco().getId()==null){
            Endereco endereco = aluno.getEndereco();
            String cep = endereco.getCep().replaceAll("[^0-9]", "");
            endereco.setCep(cep);
            enderecoRepository.save(aluno.getEndereco());
            aluno.setEndereco(endereco);
        }
        if(aluno.getCpf()!=null && aluno.getRg()!=null && aluno.getTelefone()!=null){
            String cpf = aluno.getCpf().replaceAll("[^0-9]", "");
            String rg = aluno.getRg().replaceAll("[^0-9]", "");
            String telefone = aluno.getTelefone().replaceAll("[^0-9]", "");
            aluno.setCpf(cpf);
            aluno.setRg(rg);
            aluno.setTelefone(telefone);
        }

        alunoRepository.save(aluno);
        return aluno;
    }

    public Aluno update(Aluno aluno){
        alunoRepository.save(aluno);
        return aluno;
    }

    public void inativar(Long id){
        Aluno aluno = alunoRepository.findById(id).get();
        aluno.setStAtivo(false);
        alunoRepository.save(aluno);
    }

    public void ativar(Long id){
        Aluno aluno = alunoRepository.findById(id).get();
        aluno.setStAtivo(true);
        alunoRepository.save(aluno);
    }

    public Aluno findById(Long id){
        Optional<Aluno> aluno = alunoRepository.findById(id);
        return aluno.orElse(null);
    }

    public List<Aluno> findAll(){
        return alunoRepository.findAll();
    }

    public List<Aluno> findByNome(String nome){
        return alunoRepository.findByNomeContainingIgnoreCase(nome);
    }
}
