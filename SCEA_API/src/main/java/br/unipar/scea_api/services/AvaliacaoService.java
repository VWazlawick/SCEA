package br.unipar.scea_api.services;

import br.unipar.scea_api.models.*;
import br.unipar.scea_api.repositories.AvaliacaoPerguntaRepository;
import br.unipar.scea_api.repositories.AvaliacaoRepository;
import br.unipar.scea_api.repositories.GrupoRepository;
import br.unipar.scea_api.repositories.PerguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AvaliacaoService {

    @Autowired
    public AvaliacaoRepository avaliacaoRepository;
    @Autowired
    private AlunoService alunoService;
    @Autowired
    private GrupoRepository grupoRepository;
    @Autowired
    private PerguntaRepository perguntaRepository;
    @Autowired
    private AvaliacaoPerguntaRepository avaliacaoPerguntaRepository;

    public Avaliacao insert(Avaliacao avaliacao){
        Avaliacao a = avaliacaoRepository.save(avaliacao);

        for(AvaliacaoPergunta avaliacaoPergunta : a.getAvaliacaoPerguntas()){
            avaliacaoPergunta.setAvaliacao(a);

            avaliacaoPerguntaRepository.save(avaliacaoPergunta);

        }
        return a;
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

    public List<Pergunta> getPerguntas(Long alunoId){
        Aluno aluno = alunoService.findById(alunoId);
        int idade = alunoService.calcularIdade(aluno.getDtNascimento());

        Grupo grupo = grupoRepository.findGrupoByIdade(idade).
                orElseThrow(()-> new RuntimeException("Não encontrado grupo correspondente para idade"));

        List<SubGrupo> subGrupos = grupo.getSubGrupos();

        List<Pergunta> perguntas = perguntaRepository.findBySubGrupoIn(subGrupos);

        return perguntas;
    }
}
