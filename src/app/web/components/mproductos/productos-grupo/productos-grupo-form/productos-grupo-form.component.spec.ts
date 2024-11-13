import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosGrupoFormComponent } from './productos-grupo-form.component';

describe('ProductosGrupoFormComponent', () => {
  let component: ProductosGrupoFormComponent;
  let fixture: ComponentFixture<ProductosGrupoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosGrupoFormComponent]
    });
    fixture = TestBed.createComponent(ProductosGrupoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
