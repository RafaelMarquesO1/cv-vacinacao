package com.cvoadm.CarteiraVacinacaoBE.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Vacinas")
public class Vacinas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_vacina", nullable = false, length = 30)
    private String nomeVacina;

    @Column(name = "lote", nullable = false, length = 150) // Certifique-se de que está configurado como NOT NULL
    private String lote;

    @Column(name = "vacStatus", nullable = true)
    private Boolean vacStatus;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeVacina() {
        return nomeVacina;
    }

    public void setNomeVacina(String nomeVacina) {
        this.nomeVacina = nomeVacina;
    }

    public String getLote() {
        return lote;
    }

    public void setLote(String lote) {
        this.lote = lote;
    }

    public Boolean getVacStatus() {
        return vacStatus;
    }

    public void setVacStatus(Boolean vacStatus) {
        this.vacStatus = vacStatus;
    }
}

