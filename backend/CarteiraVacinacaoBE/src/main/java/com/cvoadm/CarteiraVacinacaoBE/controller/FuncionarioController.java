package com.cvoadm.CarteiraVacinacaoBE.controller;

import com.cvoadm.CarteiraVacinacaoBE.model.Funcionario;
import com.cvoadm.CarteiraVacinacaoBE.service.FuncionarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {

    private final FuncionarioService funcionarioService;

    public FuncionarioController(FuncionarioService funcionarioService) {
        this.funcionarioService = funcionarioService;
    }

    @GetMapping
    public List<Funcionario> listarTodos() {
        return funcionarioService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Funcionario> buscarPorId(@PathVariable Integer id) {
        Optional<Funcionario> funcionario = funcionarioService.buscarPorId(id);
        return funcionario.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping
    public Funcionario salvar(@RequestBody Funcionario funcionario) {
        return funcionarioService.salvar(funcionario);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        funcionarioService.deletarPorId(id);
    }
}
