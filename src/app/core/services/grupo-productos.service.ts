import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { GrupoProducto } from '../interfaces/grupo-producto.interface';

@Injectable({
  providedIn: 'root'
})
export class GrupoProductosService {

  urlBase: string =  environment.api + environment.path
  url: string =  this.urlBase + '/grupos'

  private http = inject(HttpClient);

  getAll():Observable<any>{return this.http.get(this.url)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + '/'+ id)}
  createOrUpdate(nombre: GrupoProducto):Observable<any>{return (!nombre.idGrupo) ? this.http.post(this.url, nombre) : this.http.put(this.url + '/' + nombre.idGrupo, nombre)}





}
