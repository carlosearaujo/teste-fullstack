package br.com.unimedfortaleza.plano.service.impl;

import br.com.unimedfortaleza.plano.dto.PlanoDTO;
import br.com.unimedfortaleza.plano.model.Plano;
import br.com.unimedfortaleza.plano.repository.PlanoRepository;
import br.com.unimedfortaleza.plano.service.PlanoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;
import static br.com.unimedfortaleza.plano.dto.PlanoDTO.*;

@Service
@AllArgsConstructor
public class PlanoServiceImpl implements PlanoService {

    private final PlanoRepository repository;
    public PlanoDTO save(PlanoDTO planoDTO) {
        var plano = repository.save(toEntity(planoDTO));
        return toDTO(plano);
    }

    public PlanoDTO findById(Long id) {
        Optional<Plano> plano = repository.findById(id);
        return toDTO(plano.orElse(null));
    }
    @Transactional
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<PlanoDTO> list() {
        List<Plano> planos = repository.findAll();

        if (planos != null) {
            return planos.stream().map(PlanoDTO::toDTO).collect(toList());
        }
        return null;
    }
}
