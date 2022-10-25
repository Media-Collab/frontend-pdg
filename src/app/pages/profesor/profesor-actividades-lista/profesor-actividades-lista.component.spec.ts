import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorActividadesListaComponent } from './profesor-actividades-lista.component';

describe('ProfesorActividadesListaComponent', () => {
  let component: ProfesorActividadesListaComponent;
  let fixture: ComponentFixture<ProfesorActividadesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorActividadesListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorActividadesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
