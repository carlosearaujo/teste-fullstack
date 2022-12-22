import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Beneficiario } from "../model/beneficiario.model";

@Injectable({providedIn: 'root'})
export class BeneficiarioService{

  save(beneficiario: Beneficiario) {
    return <Observable<Beneficiario[]>>this.http[beneficiario.id ? 'put' : 'post'](`${environment.apiUrl}/beneficiario${beneficiario.id ? `/${beneficiario.id}`: ''}`, beneficiario);
  }

  constructor(private http: HttpClient){}

  list(): Observable<Beneficiario[]> {
    return <Observable<Beneficiario[]>>this.http.get(`${environment.apiUrl}/beneficiario`);
  }

  delete(idPlano: number) {
    return <Observable<Beneficiario[]>>this.http.delete(`${environment.apiUrl}/beneficiario/${idPlano}`);
  }

}