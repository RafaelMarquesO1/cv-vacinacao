package com.cvoadm.CarteiraVacinacaoBE.service;

import com.cvoadm.CarteiraVacinacaoBE.model.Vacina;
import com.cvoadm.CarteiraVacinacaoBE.repository.VacinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VacinaService {

    @Autowired
    private VacinaRepository vacinaRepository;

    public List<Vacina> listarTodas() {
        return vacinaRepository.findAll();
    }

    public Vacina salvar(Vacina vacina) {
        return vacinaRepository.save(vacina);
    }

    public Vacina atualizar(Vacina vacina) {
        return vacinaRepository.save(vacina);
    }

    public void deletar(Long id) {
        vacinaRepository.deleteById(id);
    }
}
