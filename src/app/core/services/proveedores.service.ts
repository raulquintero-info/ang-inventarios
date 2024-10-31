import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Proveedor } from '../interfaces/proveedor.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  urlBase: string =  environment.api + environment.path
  url: string =  this.urlBase + '/proveedores'



  private http = inject(HttpClient);



  getAll():Observable<any>{return this.http.get(this.url)};
  createOrUpdate(nombre: Proveedor):Observable<any>{return (!nombre.idProveedor) ? this.http.post(this.url, nombre) : this.http.put(this.url + '/' + nombre.idProveedor, nombre)}
  delete(id: number):Observable<any>{return this.http.delete(this.url + '/'+ id)}





}
