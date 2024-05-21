import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemDetails3Page } from './item-details3.page';

describe('ItemDetails3Page', () => {
  let component: ItemDetails3Page;
  let fixture: ComponentFixture<ItemDetails3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemDetails3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
