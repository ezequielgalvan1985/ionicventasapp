import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAPage } from './dashboard-a.page';

describe('DashboardAPage', () => {
  let component: DashboardAPage;
  let fixture: ComponentFixture<DashboardAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DashboardAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
