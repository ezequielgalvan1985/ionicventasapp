import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeButtonPage } from './home-button.page';

describe('HomeButtonPage', () => {
  let component: HomeButtonPage;
  let fixture: ComponentFixture<HomeButtonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
