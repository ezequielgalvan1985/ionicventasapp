import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicidadFormPage } from './publicidad-form.page';

describe('PublicidadFormPage', () => {
  let component: PublicidadFormPage;
  let fixture: ComponentFixture<PublicidadFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PublicidadFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
