import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardCPage } from './dashboard-c.page';

describe('DashboardCPage', () => {
  let component: DashboardCPage;
  let fixture: ComponentFixture<DashboardCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashboardCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
