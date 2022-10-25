import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorMisionesComponent } from './profesor-misiones.component';

describe('ProfesorMisionesComponent', () => {
  let component: ProfesorMisionesComponent;
  let fixture: ComponentFixture<ProfesorMisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorMisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorMisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
