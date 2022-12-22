package br.com.unimedfortaleza.plano.controller;

import br.com.unimedfortaleza.plano.dto.BeneficiarioDTO;
import br.com.unimedfortaleza.plano.service.BeneficiarioService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("beneficiario")
@AllArgsConstructor
public class BeneficiarioController {

    private final BeneficiarioService beneficiarioService;

    @GetMapping
    public List<BeneficiarioDTO> list() {
        return beneficiarioService.list();
    }

    @PostMapping
    public BeneficiarioDTO save(@RequestBody @Valid BeneficiarioDTO beneficiarioDTO) {
        return beneficiarioService.save(beneficiarioDTO);
    }

    @PutMapping(value = "/{id}")
    public BeneficiarioDTO update(@PathVariable("id") Long id, @RequestBody @Valid BeneficiarioDTO beneficiarioDTO) {
        beneficiarioDTO.setId(id);
        return beneficiarioService.save(beneficiarioDTO);
    }

    @GetMapping(value = "/{id}")
    public BeneficiarioDTO findById(@PathVariable("id") Long id) {
        return beneficiarioService.findById(id);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        beneficiarioService.deleteById(id);
    }
}
