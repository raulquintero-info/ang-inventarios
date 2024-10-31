import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsUsuariosListComponent } from './settings-usuarios-list.component';

describe('SettingsUsuariosListComponent', () => {
  let component: SettingsUsuariosListComponent;
  let fixture: ComponentFixture<SettingsUsuariosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsUsuariosListComponent]
    });
    fixture = TestBed.createComponent(SettingsUsuariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
