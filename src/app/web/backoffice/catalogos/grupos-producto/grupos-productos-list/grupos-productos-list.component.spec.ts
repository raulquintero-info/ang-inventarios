import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposProductosListComponent } from './grupos-productos-list.component';

describe('GruposProductosListComponent', () => {
  let component: GruposProductosListComponent;
  let fixture: ComponentFixture<GruposProductosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GruposProductosListComponent]
    });
    fixture = TestBed.createComponent(GruposProductosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
