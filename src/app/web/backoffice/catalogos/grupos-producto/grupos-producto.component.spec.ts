import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposProductoComponent } from './grupos-producto.component';

describe('GruposProductoComponent', () => {
  let component: GruposProductoComponent;
  let fixture: ComponentFixture<GruposProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GruposProductoComponent]
    });
    fixture = TestBed.createComponent(GruposProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
