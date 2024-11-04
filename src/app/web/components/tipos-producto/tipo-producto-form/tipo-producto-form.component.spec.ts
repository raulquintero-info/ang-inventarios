import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProductoFormComponent } from './tipo-producto-form.component';

describe('TipoProductoFormComponent', () => {
  let component: TipoProductoFormComponent;
  let fixture: ComponentFixture<TipoProductoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoProductoFormComponent]
    });
    fixture = TestBed.createComponent(TipoProductoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
