import { Injectable } from "@angular/core";
import { Usuario } from "../model/usuario.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class UsuarioService{

    KEY_USUARIO_LOGADO = 'usuario';
    private _usuarioLogado: Usuario | undefined;

    constructor(private http: HttpClient, private router: Router){}
    
    login(value: { login: string, password: string }) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Basic ' + btoa(`${value.login}:${value.password}`),
            }),
            responseType: 'text' as const
        };
        return this.http.post(`${environment.apiUrl}/token`,null, httpOptions).pipe(map(token => {
            this.usuarioLogado = new Usuario({ token: <string>token });
            return true;
        }))
    }

    get usuarioLogado(){
        if(!this._usuarioLogado){
            const usuarioJSONStr = localStorage.getItem(this.KEY_USUARIO_LOGADO);
            if(usuarioJSONStr){
                this._usuarioLogado = <Usuario>JSON.parse(usuarioJSONStr);
            }
            
        }
        return this._usuarioLogado;
    }

    private set usuarioLogado(usuario){
        localStorage.setItem(this.KEY_USUARIO_LOGADO, JSON.stringify(usuario));
        this._usuarioLogado = usuario;
    }

    logout() {
        this.usuarioLogado = null;
        localStorage.removeItem(this.KEY_USUARIO_LOGADO);
        this.router.navigate(['/login']);
    }

}