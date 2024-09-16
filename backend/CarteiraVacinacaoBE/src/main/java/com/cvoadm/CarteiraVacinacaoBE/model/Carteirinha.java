package com.cvoadm.CarteiraVacinacaoBE.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Carteirinha")
public class Carteirinha {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomePaciente;
    private String cpf;

    // Getters e setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomePaciente() {
        return nomePaciente;
    }

    public void setNomePaciente(String nomePaciente) {
        this.nomePaciente = nomePaciente;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}

