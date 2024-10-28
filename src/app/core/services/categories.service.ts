import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class Categories {

  urlBase: string =  environment.api + environment.path
  url: string =  this.urlBase + '/productos'

  // windowHeight: BehaviorSubject<number> = new BehaviorSubject<number>(window.innerHeight);

  private http = inject(HttpClient);


  getAll():Observable<any>{return this.http.get(this.url)};






  // get height(): Observable<number> {
  //   return this.windowHeight.asObservable();
  // }

  // setHeight(height: number){
  //   this.windowHeight.next(height);
  //   console.log('height', height);
  // }



}
