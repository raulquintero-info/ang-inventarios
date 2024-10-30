import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentWindowSize {


  windowHeight: BehaviorSubject<number> = new BehaviorSubject<number>(window.innerHeight);

  constructor() { }

  get height(): Observable<number> {
    return this.windowHeight.asObservable();
  }

  setHeight(height: number){
    this.windowHeight.next(height);
  }



}
