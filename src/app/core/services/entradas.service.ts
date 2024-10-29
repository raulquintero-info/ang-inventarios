import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  urlBase: string =  environment.api + environment.path
  url: string =  this.urlBase + '/entradas'


  private http = inject(HttpClient);

  getAll():Observable<any>{return this.http.get(this.url)};









}
