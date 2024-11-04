import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosListComponent } from './atributos-list.component';

describe('AtributosListComponent', () => {
  let component: AtributosListComponent;
  let fixture: ComponentFixture<AtributosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtributosListComponent]
    });
    fixture = TestBed.createComponent(AtributosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
