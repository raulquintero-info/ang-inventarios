import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  urlBase: string =  environment.api + environment.path
  url: string =  this.urlBase + '/categorias'

  // windowHeight: BehaviorSubject<number> = new BehaviorSubject<number>(window.innerHeight);

  private http = inject(HttpClient);


  getAll():Observable<any>{return this.http.get(this.url)};
  createOrUpdate(categoryName: Categoria):Observable<any>{return this.http.post(this.url, categoryName)}
  delete(id: number):Observable<any>{return this.http.delete(this.url + '/'+ id)}




  // get height(): Observable<number> {
  //   return this.windowHeight.asObservable();
  // }

  // setHeight(height: number){
  //   this.windowHeight.next(height);
  //   console.log('height', height);
  // }



}
