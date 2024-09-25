package com.cvoadm.CarteiraVacinacaoBE.service;

import com.cvoadm.CarteiraVacinacaoBE.model.Funcionario;
import com.cvoadm.CarteiraVacinacaoBE.repository.FuncionarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FuncionarioService {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    // Listar todos os funcionários
    public List<Funcionario> listarTodos() {
        return funcionarioRepository.findAll();
    }

    // Buscar um funcionário por ID
    public Optional<Funcionario> buscarPorId(Integer id) {
        return funcionarioRepository.findById(id);
    }

    // Criar ou atualizar um funcionário
    public Funcionario salvar(Funcionario funcionario) {
        return funcionarioRepository.save(funcionario);
    }

    // Deletar um funcionário por ID
    public void deletarPorId(Integer id) {
        funcionarioRepository.deleteById(id);
    }

    private JdbcTemplate jdbcTemplate;

    @Transactional
    public void resetarContagemId() {
        String sql = "DBCC CHECKIDENT ('Funcionario', RESEED, 0)";
        jdbcTemplate.execute(sql);
    }
}
