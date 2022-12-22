package br.com.unimedfortaleza.plano.repository;

import br.com.unimedfortaleza.plano.model.Beneficiario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeneficiarioRepository extends JpaRepository<Beneficiario, Long> {
}
