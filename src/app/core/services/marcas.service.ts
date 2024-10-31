import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Marca } from '../interfaces/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  urlBase: string =  environment.api + environment.path
  url: string =  this.urlBase + '/marcas'

  private http = inject(HttpClient);

  getAll():Observable<any>{return this.http.get(this.url)};
  createOrUpdate(nombre: Marca):Observable<any>{return (!nombre.idMarca) ? this.http.post(this.url, nombre) : this.http.put(this.url + '/' + nombre.idMarca, nombre)}
  delete(id: number):Observable<any>{return this.http.delete(this.url + '/'+ id)}





}
