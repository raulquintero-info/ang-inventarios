import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Almacen } from '../interfaces/almacen.interface';

@Injectable({
  providedIn: 'root'
})
export class AlmacenesService {

  urlBase: string =  environment.api + environment.path
  url: string =  this.urlBase + '/almacenes'

  almacen: BehaviorSubject<Almacen> = new BehaviorSubject<Almacen>({}as Almacen);

  private http = inject(HttpClient);

  constructor(){
    let currentAlmacen: any;
    currentAlmacen = localStorage.getItem('almacen');
    if(currentAlmacen){
      currentAlmacen = JSON.parse(currentAlmacen);
      this.setAlmacen(currentAlmacen);
    }
  }

  getAll():Observable<any>{return this.http.get(this.url)};
  createOrUpdate(nombre: Almacen):Observable<any>{return (!nombre.idAlmacen)?this.http.post(this.url, nombre):this.http.put(this.url + '/' + nombre.idAlmacen, nombre)}
  delete(id: number):Observable<any>{return this.http.delete(this.url + '/'+ id)}




  get currentAlmacen(): Observable<Almacen> {

    return this.almacen.asObservable();
  }

  setAlmacen(almacen: Almacen){
    localStorage.setItem('almacen', JSON.stringify(almacen));
    this.almacen.next(almacen);
    console.log('setAlmacen', almacen);
  }

  public getAlmacen(): Almacen {
    let almacenStr = localStorage.getItem('almacen') ;
      return JSON.parse( almacenStr! ) as Almacen;
  }

}
