package com.cvoadm.CarteiraVacinacaoBE.repository;

import com.cvoadm.CarteiraVacinacaoBE.model.Vacinas;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VacinasRepository extends JpaRepository<Vacinas, Long> {
}
