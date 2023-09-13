import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicidadListadoPage } from './publicidad-listado.page';

describe('PublicidadListadoPage', () => {
  let component: PublicidadListadoPage;
  let fixture: ComponentFixture<PublicidadListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PublicidadListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
