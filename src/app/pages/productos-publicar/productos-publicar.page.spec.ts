import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosPublicarPage } from './productos-publicar.page';

describe('ProductosPublicarPage', () => {
  let component: ProductosPublicarPage;
  let fixture: ComponentFixture<ProductosPublicarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductosPublicarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
