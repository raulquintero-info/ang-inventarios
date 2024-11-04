import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { TipoProducto } from '../interfaces/tipo-producto.interface';

@Injectable({
  providedIn: 'root'
})
export class TiposProductoService {

  urlBase: string =  environment.api + environment.path
  url: string =  this.urlBase + '/tipos-producto'

  private http = inject(HttpClient);

  getAll():Observable<any>{return this.http.get(this.url)};
  delete(id: number):Observable<any>{return this.http.delete(this.url + '/'+ id)}
  createOrUpdate(nombre: TipoProducto):Observable<any>{return (!nombre.idTipoProducto) ? this.http.post(this.url, nombre) : this.http.put(this.url + '/' + nombre.idTipoProducto, nombre)}





}
