import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/core/interfaces/categoria.interface';
import { Item } from 'src/app/core/models/Item';
import { PRODUCTOS } from 'src/app/data/productos';

@Component({
  selector: 'app-tree-directory',
  templateUrl: './tree-directory.component.html',
  styleUrls: ['./tree-directory.component.css']
})
export class TreeDirectoryComponent implements OnInit {
  rightPanelStyle: any;

  @Input() categorias: any [] = [];
  @Output() categoryId = new EventEmitter<number>();
  @Output() contextMenuCategory = new EventEmitter<any>();

  categoriaTitulo: string = '';
  items: Item[] = [];
  list: any;

  contextmenu = false;
  contextmenuX = 0;
  contextmenuY = 0;

  ngOnInit(): void {

  }

  onCategory(id: number) {
    console.log('onCate', id)
    this.categoryId.emit(id);
    this.markCategory(id)


  }

  // contextMenu
  detectRightMouseClick(properties: any, id: number) {

    if (properties.which === 3) {
      console.log('detect', id, properties);
      this.categoryId.emit(id);
      this.markCategory(id);
      this.rightPanelStyle = { 'display': 'block', 'position': 'absolute', 'left.px': properties.clientX+50, 'top.px': properties.clientY, id: id };
      console.log( this.rightPanelStyle)
      this.contextMenuCategory.emit( this.rightPanelStyle);
      return false;
    }
    return true;
  }


  markCategory(id: number){

    let element: any = document.getElementsByClassName('active-category')[0];
    if (element) {
      element.classList.remove("active-category");
      element.classList.add("btn-azul")
    }

    if (id) {
      element = document.getElementById('p' + id);
      element.classList.add("active-category")
      element.classList.remove("btn-azul")
    }
  }

}
