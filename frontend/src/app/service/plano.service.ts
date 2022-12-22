import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Plano } from "../model/plano.model";

@Injectable({providedIn: 'root'})
export class PlanoService{

  constructor(private http: HttpClient){}

  save(plano: Plano) {
    return <Observable<Plano[]>>this.http[plano.id ? 'put' : 'post'](`${environment.apiUrl}/plano${plano.id ? `/${plano.id}` : ''}`, plano);
  }

  list(): Observable<Plano[]> {
    return <Observable<Plano[]>>this.http.get(`${environment.apiUrl}/plano`);
  }

  delete(idPlano: number) {
    return <Observable<Plano[]>>this.http.delete(`${environment.apiUrl}/plano/${idPlano}`);
  }

}