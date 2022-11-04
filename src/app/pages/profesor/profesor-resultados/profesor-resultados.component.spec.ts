import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorResultadosComponent } from './profesor-resultados.component';

describe('ProfesorResultadosComponent', () => {
  let component: ProfesorResultadosComponent;
  let fixture: ComponentFixture<ProfesorResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorResultadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
