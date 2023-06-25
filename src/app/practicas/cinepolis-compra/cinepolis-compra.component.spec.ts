import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinepolisCompraComponent } from './cinepolis-compra.component';

describe('CinepolisCompraComponent', () => {
  let component: CinepolisCompraComponent;
  let fixture: ComponentFixture<CinepolisCompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CinepolisCompraComponent]
    });
    fixture = TestBed.createComponent(CinepolisCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
