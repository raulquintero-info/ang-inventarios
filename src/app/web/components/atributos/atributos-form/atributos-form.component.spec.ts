import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosFormComponent } from './atributos-form.component';

describe('AtributosFormComponent', () => {
  let component: AtributosFormComponent;
  let fixture: ComponentFixture<AtributosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtributosFormComponent]
    });
    fixture = TestBed.createComponent(AtributosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
