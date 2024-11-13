import { Component, EventEmitter, Output, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proveedor-modal',
  templateUrl: './proveedor-modal.component.html',
  styleUrls: ['./proveedor-modal.component.css']
})
export class ProveedorModalComponent {

  public activeModal = inject(NgbActiveModal);

  @Output() temp: any  = new EventEmitter<any>();
  // @Output() closeModal: any = new EventEmitter<any>();

  onClose(){ this.activeModal.close('Close click'); }
  getAll(){ this.temp.emit(null); }

}
