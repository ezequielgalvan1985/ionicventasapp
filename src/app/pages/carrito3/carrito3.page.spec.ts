import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carrito3Page } from './carrito3.page';

describe('Carrito3Page', () => {
  let component: Carrito3Page;
  let fixture: ComponentFixture<Carrito3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Carrito3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
