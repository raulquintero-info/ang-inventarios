import { Component, OnInit, inject } from '@angular/core';
import { CurrentWindowSize } from './core/services/current-window-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'ang-inventarios';


  private currentWindowSize = inject(CurrentWindowSize);





  // para determinar la altura de la ventana del navegador y propagarla por toda la aplicacion
  onResize(event: any){
    this.currentWindowSize.setHeight(event.target.innerHeight);
    console.log('>>>',event.target.innerHeight)
  }

}
