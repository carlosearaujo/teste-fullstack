import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  unauthorized = false;

  constructor(private _fb: FormBuilder, private usuarioService: UsuarioService, 
              private msgService: MessageService, private router: Router, private route: ActivatedRoute){}

  public loginForm: FormGroup | undefined;
    
  submitted = false;
  
  ngOnInit() {
    this.usuarioService.logout();
    this.loginForm = this._fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onSubmit() { 
    this.submitted = true;
    this.usuarioService.login(this.loginForm.value).subscribe(
      () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'];
        this.router.navigateByUrl(returnUrl || '/');
      },
      (err) => { 
        if(err.status == HttpStatusCode.Unauthorized){
          this.unauthorized = true;
          setTimeout(() => this.unauthorized = false, 5000);
          return;
        }
        this.msgService.add({
          severity: 'error', summary:'Erro', detail: 'Erro inesperado'
        });
      }
    )
  }

}
