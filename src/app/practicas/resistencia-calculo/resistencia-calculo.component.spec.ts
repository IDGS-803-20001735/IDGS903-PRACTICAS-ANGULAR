import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistenciaCalculoComponent } from './resistencia-calculo.component';

describe('ResistenciaCalculoComponent', () => {
  let component: ResistenciaCalculoComponent;
  let fixture: ComponentFixture<ResistenciaCalculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistenciaCalculoComponent]
    });
    fixture = TestBed.createComponent(ResistenciaCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
