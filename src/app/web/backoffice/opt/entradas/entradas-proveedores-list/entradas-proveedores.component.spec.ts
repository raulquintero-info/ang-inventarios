import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasProveedoresComponent } from './entradas-proveedores.component';

describe('EntradasProveedoresComponent', () => {
  let component: EntradasProveedoresComponent;
  let fixture: ComponentFixture<EntradasProveedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntradasProveedoresComponent]
    });
    fixture = TestBed.createComponent(EntradasProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
