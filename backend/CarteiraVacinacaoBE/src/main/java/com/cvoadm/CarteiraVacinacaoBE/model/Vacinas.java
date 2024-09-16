package com.cvoadm.CarteiraVacinacaoBE.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Vacinas")
public class Vacinas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomeVacina;

    private String lote;

    private java.sql.Date dataAplicacao;

    private Boolean vacStatus;

    @ManyToOne
    @JoinColumn(name = "carteirinha_id")
    private Carteirinha carteirinha;


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

    public Date getDataAplicacao() {
        return dataAplicacao;
    }

    public void setDataAplicacao(Date dataAplicacao) {
        this.dataAplicacao = dataAplicacao;
    }

    public Boolean getVacStatus() {
        return vacStatus;
    }

    public void setVacStatus(Boolean vacStatus) {
        this.vacStatus = vacStatus;
    }

    public Carteirinha getCarteirinha() {
        return carteirinha;
    }

}

