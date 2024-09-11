package com.cvoadm.CarteiraVacinacaoBE.controller;

import com.cvoadm.CarteiraVacinacaoBE.model.Vacina;
import com.cvoadm.CarteiraVacinacaoBE.service.VacinaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vacinas")
public class VacinaController {

    @Autowired
    private VacinaService vacinaService;

    @GetMapping
    public List<Vacina> listarTodas() {
        return vacinaService.listarTodas();
    }

    @PostMapping
    public Vacina salvar(@RequestBody Vacina vacina) {
        return vacinaService.salvar(vacina);
    }

    @PutMapping ("/{id}")
    public Vacina atualizar(@PathVariable Long id, @RequestBody Vacina vacina) {
        vacina.setId(id);
        return vacinaService.atualizar(vacina);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        vacinaService.deletar(id);
    }


}
