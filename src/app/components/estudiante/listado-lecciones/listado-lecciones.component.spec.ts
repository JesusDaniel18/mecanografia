import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLeccionesComponent } from './listado-lecciones.component';

describe('ListadoLeccionesComponent', () => {
  let component: ListadoLeccionesComponent;
  let fixture: ComponentFixture<ListadoLeccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoLeccionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoLeccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
