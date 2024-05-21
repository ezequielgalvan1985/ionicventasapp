import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginCPage } from './login-c.page';

describe('LoginCPage', () => {
  let component: LoginCPage;
  let fixture: ComponentFixture<LoginCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
