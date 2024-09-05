package br.unipar.scea_api.services;

import br.unipar.scea_api.models.Cidade;
import br.unipar.scea_api.models.Empresa;
import br.unipar.scea_api.repositories.EmpresaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class EmpresaService {

    @Autowired
    private EmpresaRepository empresaRepository;

    public List<Empresa> findAll() {
        return empresaRepository.findAll();
    }

    public Empresa findById(Long id) {
        Optional<Empresa> empresa = empresaRepository.findById(id);
        return empresa.orElse(null);
    }

    public Empresa insert(Empresa empresa) {
        return empresaRepository.save(empresa);
    }

    public Empresa update(Empresa empresa){
        return empresaRepository.save(empresa);
    }

    public void inativar(Long id){
        Empresa empresa = empresaRepository.findById(id).get();
        empresa.setStAtivo(false);
        empresaRepository.save(empresa);
    }

    public void ativar(Long id){
        Empresa empresa = empresaRepository.findById(id).get();
        empresa.setStAtivo(true);
        empresaRepository.save(empresa);
    }
}
