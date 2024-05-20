import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListCPage } from './products-list-c.page';

describe('ProductsListCPage', () => {
  let component: ProductsListCPage;
  let fixture: ComponentFixture<ProductsListCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductsListCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
