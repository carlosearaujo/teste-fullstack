import { Component, OnInit } from '@angular/core';
import { Beneficiario } from 'src/app/model/beneficiario.model';
import { BeneficiarioService } from 'src/app/service/beneficiario.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfirmationService} from 'primeng/api';
import { Plano } from 'src/app/model/plano.model';
import { PlanoService } from 'src/app/service/plano.service';
import { cpf } from 'cpf-cnpj-validator'; 

@Component({
  selector: 'app-beneficiario',
  templateUrl: './beneficiario.component.html',
  styleUrls: ['./beneficiario.component.scss']
})
export class BeneficiarioComponent implements OnInit {

  form: FormGroup;
  planos: Plano[];
  beneficiarios: Beneficiario[];

  constructor(private beneficiarioService: BeneficiarioService, private _fb: FormBuilder, private msgService: MessageService, 
              private planoService: PlanoService, private confirmService: ConfirmationService) { }

  ngOnInit(): void {
    this.initForm();
    this.listarBeneficiarios();
    this.listarPlanos();
  }

  listarPlanos() {
    this.planoService.list().subscribe(planos => this.planos = planos);
  }

  initForm() {
    this.form = this._fb.group({
      id: [],
      nome: ['', Validators.required],
      cpf: ['',  [Validators.required, (control:AbstractControl) => !cpf.isValid(control.value) ? { invalidCpf: true } : null]],
      email: ['', [Validators.required, Validators.email]],
      idade: ['', Validators.required],
      idPlano: ['', Validators.required]
    })
  }


  private listarBeneficiarios() {
    this.beneficiarioService.list().subscribe(planos => {
      this.beneficiarios = planos;
    });
  }

  save(){
    this.beneficiarioService.save(this.form.value).subscribe(() => {
      this.msgService.add({ summary: 'Beneficiário', detail: 'Beneficiário Salvo com sucesso.', severity: 'success' });
      this.listarBeneficiarios();
      this.form.reset();
      setTimeout(() =>{ this.msgService.clear(); }, 2000);
    });
  }

  edit(plano: Plano){
    this.form.patchValue(plano);
  }

  delete(beneficiario: Beneficiario){
    this.confirmService.confirm({
      message: `Confirma a remoção do beneficiário ${beneficiario.nome}?`,
      accept: () => {
        this.beneficiarioService.delete(beneficiario.id).subscribe(() => {
          this.msgService.add({ summary: 'Beneficiário', detail: 'Beneficiário Removido com sucesso.', severity: 'success' });
          this.listarBeneficiarios();
        });
      }
    })
    
  }
}
