import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginBPage } from './login-b.page';

describe('LoginBPage', () => {
  let component: LoginBPage;
  let fixture: ComponentFixture<LoginBPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
