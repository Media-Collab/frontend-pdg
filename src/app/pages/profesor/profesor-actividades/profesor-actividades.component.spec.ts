import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorActividadesComponent } from './profesor-actividades.component';

describe('ProfesorActividadesComponent', () => {
  let component: ProfesorActividadesComponent;
  let fixture: ComponentFixture<ProfesorActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorActividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
