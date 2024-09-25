package com.cvoadm.CarteiraVacinacaoBE.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.cvoadm.CarteiraVacinacaoBE.model.Funcionario;
import com.cvoadm.CarteiraVacinacaoBE.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1/funcionarios")  // Certifique-se de que o caminho está correto
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    // Criar um novo funcionário
    @PostMapping
    public ResponseEntity<Funcionario> criar(@RequestBody Funcionario funcionario) {
        Funcionario novoFuncionario = funcionarioService.salvar(funcionario);
        return ResponseEntity.ok(novoFuncionario);
    }

    // Listar todos os funcionários
    @GetMapping
    public ResponseEntity<List<Funcionario>> listarTodos() {
        List<Funcionario> funcionarios = funcionarioService.listarTodos();
        return ResponseEntity.ok(funcionarios);
    }

    // Atualizar um funcionário
    @PutMapping("/{id}")
    public ResponseEntity<Funcionario> atualizar(@PathVariable Integer id, @RequestBody Funcionario funcionario) {
        funcionario.setId(id);
        Funcionario funcionarioAtualizado = funcionarioService.salvar(funcionario);
        return ResponseEntity.ok(funcionarioAtualizado);
    }

    // Deletar um funcionário
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        funcionarioService.deletarPorId(id);
        return ResponseEntity.noContent().build();
    }
}
