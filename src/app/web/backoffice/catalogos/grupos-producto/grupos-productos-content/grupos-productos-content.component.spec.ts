import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposProductosContentComponent } from './grupos-productos-content.component';

describe('GruposProductoContentComponent', () => {
  let component: GruposProductosContentComponent;
  let fixture: ComponentFixture<GruposProductosContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GruposProductosContentComponent]
    });
    fixture = TestBed.createComponent(GruposProductosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
