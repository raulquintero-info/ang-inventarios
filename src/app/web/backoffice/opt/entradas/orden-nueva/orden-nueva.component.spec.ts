import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenNuevaComponent } from './orden-nueva.component';

describe('OrdenNuevaComponent', () => {
  let component: OrdenNuevaComponent;
  let fixture: ComponentFixture<OrdenNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdenNuevaComponent]
    });
    fixture = TestBed.createComponent(OrdenNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
