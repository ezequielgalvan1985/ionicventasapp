import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemDetails2Page } from './item-details2.page';

describe('ItemDetails2Page', () => {
  let component: ItemDetails2Page;
  let fixture: ComponentFixture<ItemDetails2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemDetails2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
