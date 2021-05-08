import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from 'src/model/estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  baseUrlEstados = "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
  baseUrlMunicipio = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
  baseUrlDistrito = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios/"

  constructor(private http: HttpClient) { }

  read(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.baseUrlEstados)
  }

  readMunicipio(idEstado: string): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.baseUrlMunicipio + idEstado + "/municipios?orderBy=nome")
    console.log(this.baseUrlEstados + idEstado + "/municipios")
  }

  readDistrito(idMunicipio: string): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.baseUrlDistrito + idMunicipio + "/distritos?orderBy=nome")
  }

}
