import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { UnidadMedida } from '../interfaces/unidades-medida';

@Injectable({
  providedIn: 'root'
})
export class UnidadesMedidaService {

  urlBase: string =  environment.api + environment.path
  url: string =  this.urlBase + '/unidadesMedida'

  private http = inject(HttpClient);

  getAll():Observable<any>{return this.http.get(this.url)};
  createOrUpdate(nombre: UnidadMedida):Observable<any>{return (!nombre.idUnidadMedida) ? this.http.post(this.url, nombre) : this.http.put(this.url + '/' + nombre.idUnidadMedida, nombre)}
  delete(id: number):Observable<any>{return this.http.delete(this.url + '/'+ id)}





}
