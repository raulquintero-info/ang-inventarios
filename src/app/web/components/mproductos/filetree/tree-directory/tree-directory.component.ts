import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/core/models/Item';
import { PRODUCTOS } from 'src/app/data/productos';

@Component({
  selector: 'app-tree-directory',
  templateUrl: './tree-directory.component.html',
  styleUrls: ['./tree-directory.component.css']
})
export class TreeDirectoryComponent implements OnInit{

@Input() categorias: any;
@Output() categoryId = new EventEmitter<number>();


categorySelected: number = 0;
categoriaTitulo: string ='';
items: Item[] =[];
list: any;
ngOnInit(): void {

}

onCategory( id: any){
  this.categoryId.emit(id);
  this.categorySelected = id;
  let temp = PRODUCTOS.filter((x: any)=>{
    if(x.id==id)
    return x;
})

// TODO: revisar que hace esta linea
// this.items = temp[0].content;

// this. categoriaTitulo = categoria;

let element:any = document.getElementsByClassName('active-category')[0];
  if(element){
    element.classList.remove("active-category");
    element.classList.add("btn-azul")
  }
  element = document.getElementById('p'+id);

  // console.log(i);
  element.classList.add("active-category")
  element.classList.remove("btn-azul")


  // this.items = PRODUCTOS;
}


}
