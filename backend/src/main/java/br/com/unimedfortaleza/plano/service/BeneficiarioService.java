package br.com.unimedfortaleza.plano.service;

import br.com.unimedfortaleza.plano.dto.BeneficiarioDTO;

import java.util.List;

public interface BeneficiarioService {
    List<BeneficiarioDTO> list();

    BeneficiarioDTO save(BeneficiarioDTO beneficiarioDTO);

    BeneficiarioDTO findById(Long id);

    void deleteById(Long id);
}
