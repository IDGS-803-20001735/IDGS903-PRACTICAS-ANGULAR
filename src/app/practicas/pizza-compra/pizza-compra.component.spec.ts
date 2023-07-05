import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCompraComponent } from './pizza-compra.component';

describe('PizzaCompraComponent', () => {
  let component: PizzaCompraComponent;
  let fixture: ComponentFixture<PizzaCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaCompraComponent]
    });
    fixture = TestBed.createComponent(PizzaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
