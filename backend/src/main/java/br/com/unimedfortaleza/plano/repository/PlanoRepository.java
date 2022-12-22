package br.com.unimedfortaleza.plano.repository;

import br.com.unimedfortaleza.plano.model.Plano;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanoRepository extends JpaRepository<Plano, Long> {
}
