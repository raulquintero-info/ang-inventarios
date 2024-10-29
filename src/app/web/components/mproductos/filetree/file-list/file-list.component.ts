import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent {
  rightPanelStyle: any = {"display": "none"};
  selectedItemId: number = 0;
  @Input() items: any;
  @Output() categoryId = new EventEmitter<number>();
  @Output() itemId = new EventEmitter<number>();

  singleClick(id: number) {
    this.categoryId.emit(id);
    console.log(id);


    let element: any = document.getElementsByClassName('row-selected')[0];
    if (element) {
      element.classList.remove("row-selected");
    }
    element = document.getElementById('row' + (id));

    element.classList.add("row-selected")


  }

  doubleClick() {
    this.itemId.emit(0);
  }




  detectRightMouseClick($event: any, id: number) {
    if ($event.which === 3) {
      this.rightPanelStyle = { 'display': 'block', 'position': 'absolute', 'left.px': $event.clientX-280, 'top.px': $event.clientY-30 };
      this.selectedItemId = id;
      return false;
    }
    return true;
  }
  closeContextMenu() {
     this.rightPanelStyle = { 'display': 'none' };
  }
}
