import { Component, OnInit } from '@angular/core';
import { Plano } from 'src/app/model/plano.model';
import { PlanoService } from 'src/app/service/plano.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.scss']
})
export class PlanoComponent implements OnInit {

  form: FormGroup;
  planos: Plano[];

  constructor(private planoService: PlanoService, private _fb: FormBuilder, private msgService: MessageService, private confirmService: ConfirmationService) { }

  ngOnInit(): void {
    this.initForm();
    this.listar();
  }

  private listar() {
    this.planoService.list().subscribe(planos => {
      this.planos = planos;
    });
  }

  initForm() {
    this.form = this._fb.group({
      id: [],
      nome: ['', Validators.required],
      valor: ['',  Validators.required]
    })
  }

  save(){
    this.planoService.save(this.form.value).subscribe(() => {
      this.msgService.add({ summary: 'Plano', detail: 'Plano Salvo com sucesso.', severity: 'success' });
      this.listar();
      this.form.reset();
      setTimeout(() =>{ this.msgService.clear(); }, 2000);
    });
  }

  edit(plano: Plano){
    this.form.patchValue(plano);
  }

  delete(plano: Plano){
    this.confirmService.confirm({
      message: `Confirma a remoção do plano ${plano.nome}?`,
      accept: () => {
        this.planoService.delete(plano.id).subscribe(() => {
          this.msgService.add({ summary: 'Plano', detail: 'Plano Removido com sucesso.', severity: 'success' });
          this.listar();
        });
      }
    })
    
  }

}
