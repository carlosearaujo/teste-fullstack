package br.com.unimedfortaleza.plano.dto;

import br.com.unimedfortaleza.plano.model.Plano;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlanoDTO {
    private Long id;
    private String nome;
    private Double valor;

    public static PlanoDTO toDTO(Plano plano) {
        if(plano == null){
            return null;
        }
        return PlanoDTO.builder()
                .id(plano.getId())
                .nome(plano.getNome())
                .valor(plano.getValor())
                .build();
    }

    public static Plano toEntity(PlanoDTO planoDTO) {
        return Plano.builder()
                .id(planoDTO.getId())
                .nome(planoDTO.getNome())
                .valor(planoDTO.getValor())
                .build();
    }
}
