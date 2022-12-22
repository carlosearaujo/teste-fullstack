package br.com.unimedfortaleza.plano.controller;

import br.com.unimedfortaleza.plano.dto.PlanoDTO;
import br.com.unimedfortaleza.plano.service.PlanoService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("plano")
@AllArgsConstructor
public class PlanoController {

    private final PlanoService planoService;

    @GetMapping
    public List<PlanoDTO> list() {
        return planoService.list();
    }

    @PostMapping
    public PlanoDTO save(@RequestBody @Valid PlanoDTO planoDTO) {
        return planoService.save(planoDTO);
    }

    @PutMapping(value = "/{id}")
    public PlanoDTO update(@PathVariable("id") Long id, @RequestBody @Valid PlanoDTO planoDTO) {
        planoDTO.setId(id);
        return planoService.save(planoDTO);
    }

    @GetMapping(value = "/{id}")
    public PlanoDTO findById(@PathVariable("id") Long id) {
        return planoService.findById(id);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable("id") Long id) {
        planoService.deleteById(id);
    }
}
