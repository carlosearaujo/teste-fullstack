package br.com.unimedfortaleza.plano.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Beneficiario {
    @Id
    @GeneratedValue
    private Long id;
    private String nome;
    private String cpf;
    private String email;
    private int idade;

    @ManyToOne
    @JoinColumn(name="plano_id", nullable=false)
    private Plano plano;
}
