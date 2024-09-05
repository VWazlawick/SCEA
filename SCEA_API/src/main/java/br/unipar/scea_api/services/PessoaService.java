package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Pergunta;
import br.unipar.scea_api.models.Pessoa;
import br.unipar.scea_api.repositories.PerguntaRepository;
import br.unipar.scea_api.repositories.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public Pessoa insert(Pessoa pessoa){
        return pessoaRepository.save(pessoa);
    }

    public Pessoa update(Pessoa pessoa){
        return pessoaRepository.save(pessoa);
    }

    public void inativar(Long id){
        Pessoa pessoa = pessoaRepository.findById(id).get();
        pessoa.setStAtivo(false);
        pessoaRepository.save(pessoa);
    }

    public void ativar(Long id){
        Pessoa pessoa = pessoaRepository.findById(id).get();
        pessoa.setStAtivo(true);
        pessoaRepository.save(pessoa);
    }

    public Pessoa findById(Long id){
        Optional<Pessoa> pessoa = pessoaRepository.findById(id);
        return pessoa.orElse(null);
    }

    public List<Pessoa> findAll(){
        return pessoaRepository.findAll();
    }
}
