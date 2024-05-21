import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carrito4Page } from './carrito4.page';

describe('Carrito4Page', () => {
  let component: Carrito4Page;
  let fixture: ComponentFixture<Carrito4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Carrito4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
