import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginAPage } from './login-a.page';

describe('LoginAPage', () => {
  let component: LoginAPage;
  let fixture: ComponentFixture<LoginAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
