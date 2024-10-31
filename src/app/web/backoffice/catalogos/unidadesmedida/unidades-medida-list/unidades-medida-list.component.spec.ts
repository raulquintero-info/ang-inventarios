import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesMedidaListComponent } from './unidades-medida-list.component';

describe('UnidadesMedidaListComponent', () => {
  let component: UnidadesMedidaListComponent;
  let fixture: ComponentFixture<UnidadesMedidaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadesMedidaListComponent]
    });
    fixture = TestBed.createComponent(UnidadesMedidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
