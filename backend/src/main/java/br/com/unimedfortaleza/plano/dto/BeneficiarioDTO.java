package br.com.unimedfortaleza.plano.dto;

import br.com.unimedfortaleza.plano.model.Beneficiario;
import br.com.unimedfortaleza.plano.model.Plano;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BeneficiarioDTO {
    private Long id;
    private String nome;
    private String cpf;
    private String email;
    private Integer idade;
    private Long idPlano;
    private String nomePlano;

    public static BeneficiarioDTO toDTO(Beneficiario beneficiario) {
            return BeneficiarioDTO.builder()
                    .id(beneficiario.getId())
                    .cpf(beneficiario.getCpf())
                    .email(beneficiario.getEmail())
                    .idade(beneficiario.getIdade())
                    .nome(beneficiario.getNome())
                    .idPlano(beneficiario.getPlano().getId())
                    .nomePlano(beneficiario.getPlano().getNome())
                    .build();
    }

    public static Beneficiario toEntity(BeneficiarioDTO beneficiarioDTO) {
        Plano plano = Plano.builder().id(beneficiarioDTO.getIdPlano()).build();

        return Beneficiario.builder()
                .id(beneficiarioDTO.getId())
                .cpf(beneficiarioDTO.getCpf())
                .email(beneficiarioDTO.getEmail())
                .idade(beneficiarioDTO.getIdade())
                .nome(beneficiarioDTO.getNome())
                .plano(plano)
                .build();
    }
}
