package br.com.unimedfortaleza.plano.service;

import br.com.unimedfortaleza.plano.dto.PlanoDTO;

import java.util.List;

public interface PlanoService {
    PlanoDTO save(PlanoDTO planoDTO);
    PlanoDTO findById(Long id);
    void deleteById(Long id);
    List<PlanoDTO> list();
}
