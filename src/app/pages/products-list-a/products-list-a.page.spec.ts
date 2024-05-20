import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListAPage } from './products-list-a.page';

describe('ProductsListAPage', () => {
  let component: ProductsListAPage;
  let fixture: ComponentFixture<ProductsListAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductsListAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
