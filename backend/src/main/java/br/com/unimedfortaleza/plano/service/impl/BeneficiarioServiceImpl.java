package br.com.unimedfortaleza.plano.service.impl;

import br.com.unimedfortaleza.plano.dto.BeneficiarioDTO;
import br.com.unimedfortaleza.plano.model.Beneficiario;
import br.com.unimedfortaleza.plano.repository.BeneficiarioRepository;
import br.com.unimedfortaleza.plano.service.BeneficiarioService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static br.com.unimedfortaleza.plano.dto.BeneficiarioDTO.toDTO;
import static br.com.unimedfortaleza.plano.dto.BeneficiarioDTO.toEntity;
import static java.util.stream.Collectors.toList;

@Service
@AllArgsConstructor
public class BeneficiarioServiceImpl implements BeneficiarioService {

    private final BeneficiarioRepository repository;
    @Override
    public List<BeneficiarioDTO> list() {
        List<Beneficiario> beneficiarios = repository.findAll();

        if (beneficiarios != null) {
            return beneficiarios.stream().map(BeneficiarioDTO::toDTO).collect(toList());
        }
        return null;
    }

    @Override
    public BeneficiarioDTO save(BeneficiarioDTO beneficiarioDTO) {
        var beneficiario = repository.save(toEntity(beneficiarioDTO));
        return toDTO(beneficiario);
    }

    @Override
    public BeneficiarioDTO findById(Long id) {
        Optional<Beneficiario> beneficiario = repository.findById(id);
        return toDTO(beneficiario.orElse(null));
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
