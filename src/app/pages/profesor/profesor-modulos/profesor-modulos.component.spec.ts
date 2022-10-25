import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorModulosComponent } from './profesor-modulos.component';

describe('ProfesorModulosComponent', () => {
  let component: ProfesorModulosComponent;
  let fixture: ComponentFixture<ProfesorModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorModulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
