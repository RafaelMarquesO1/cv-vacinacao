package com.cvoadm.CarteiraVacinacaoBE.service;

import com.cvoadm.CarteiraVacinacaoBE.model.Vacinas;
import com.cvoadm.CarteiraVacinacaoBE.repository.VacinasRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VacinaService {

    @Autowired
    private VacinasRepository vacinaRepository;

    // Buscar todas as vacinas
    public List<Vacinas> listarTodas() {
        return vacinaRepository.findAll();
    }

    // Buscar vacina por ID
    public Optional<Vacinas> buscarPorId(Long id) {
        return vacinaRepository.findById(id);
    }

    // Salvar uma nova vacina
    public Vacinas salvar(Vacinas vacina) {
        return vacinaRepository.save(vacina);
    }

    // Atualizar uma vacina existente
    public Vacinas atualizar(Long id, Vacinas vacinaAtualizada) {
        return vacinaRepository.findById(id)
                .map(vacinas -> {
                    vacinas.setNomeVacina(vacinaAtualizada.getNomeVacina());
                    vacinas.setLote(vacinaAtualizada.getLote());
                    vacinas.setVacStatus(vacinaAtualizada.getVacStatus());
                    return vacinaRepository.save(vacinas);
                }).orElseThrow(() -> new EntityNotFoundException("Vacina não encontrada"));
    }

    // Deletar uma vacina
    public void deletar(Long id) {
        vacinaRepository.deleteById(id);
    }
}

