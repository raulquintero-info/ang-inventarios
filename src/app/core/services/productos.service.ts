import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  urlBase: string =  environment.api + environment.path
  url: string =  this.urlBase + '/productos'

  private http = inject(HttpClient);

  getAll():Observable<any>{return this.http.get(this.url)};
  createOrUpdate(nombre: Producto):Observable<any>{return (!nombre.idProducto) ? this.http.post(this.url, nombre) : this.http.put(this.url + '/' + nombre.idProducto, nombre)}
  delete(id: number):Observable<any>{return this.http.delete(this.url + '/'+ id)}

}
