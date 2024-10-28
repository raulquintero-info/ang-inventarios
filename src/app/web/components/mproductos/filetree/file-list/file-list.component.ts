import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent {

  @Input() items: any;
  @Output() categoryId = new EventEmitter<number>();
  @Output() itemId = new EventEmitter<number>();

  singleClick(id: number){
    this.categoryId.emit(id);
  }

  doubleClick(){
    this.itemId.emit(0);
  }
}
