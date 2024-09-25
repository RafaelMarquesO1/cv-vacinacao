package com.cvoadm.CarteiraVacinacaoBE.controller;

import com.cvoadm.CarteiraVacinacaoBE.model.Vacinas;
import com.cvoadm.CarteiraVacinacaoBE.service.VacinaService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/vacinas")
public class VacinaController {

    @Autowired
    private VacinaService vacinaService;

    // Endpoint para listar todas as vacinas
    @GetMapping
    public List<Vacinas> listarTodas() {
        return vacinaService.listarTodas();
    }

    // Endpoint para buscar uma vacina pelo ID
    @GetMapping("/{id}")
    public ResponseEntity<Vacinas> buscarPorId(@PathVariable Long id) {
        return vacinaService.buscarPorId(id)
                .map(vacinas -> ResponseEntity.ok().body(vacinas))
                .orElse(ResponseEntity.notFound().build());
    }

    // Endpoint para criar uma nova vacina
    @PostMapping
    public ResponseEntity<Vacinas> criar(@RequestBody Vacinas vacina) {
        Vacinas novaVacina = vacinaService.salvar(vacina);
        return ResponseEntity.status(HttpStatus.CREATED).body(novaVacina);
    }

    // Endpoint para atualizar uma vacina existente
    @PutMapping("/{id}")
    public ResponseEntity<Vacinas> atualizar(@PathVariable Long id, @RequestBody Vacinas vacinaAtualizada) {
        try {
            Vacinas vacinaAtualizadaResponse = vacinaService.atualizar(id, vacinaAtualizada);
            return ResponseEntity.ok(vacinaAtualizadaResponse);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint para deletar uma vacina pelo ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        vacinaService.deletar(id);
        return ResponseEntity.noContent().build();
    }

}
