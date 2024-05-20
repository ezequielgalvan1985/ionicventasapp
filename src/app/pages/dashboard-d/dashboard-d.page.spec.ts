import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardDPage } from './dashboard-d.page';

describe('DashboardDPage', () => {
  let component: DashboardDPage;
  let fixture: ComponentFixture<DashboardDPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashboardDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
