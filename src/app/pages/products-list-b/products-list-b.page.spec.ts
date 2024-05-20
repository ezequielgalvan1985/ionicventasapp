import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListBPage } from './products-list-b.page';

describe('ProductsListBPage', () => {
  let component: ProductsListBPage;
  let fixture: ComponentFixture<ProductsListBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductsListBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
