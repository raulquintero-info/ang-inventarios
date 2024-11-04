import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesMedidaFormComponent } from './unidades-medida-form.component';

describe('UnidadesMedidaFormComponent', () => {
  let component: UnidadesMedidaFormComponent;
  let fixture: ComponentFixture<UnidadesMedidaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadesMedidaFormComponent]
    });
    fixture = TestBed.createComponent(UnidadesMedidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
