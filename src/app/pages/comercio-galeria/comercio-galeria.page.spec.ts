import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComercioGaleriaPage } from './comercio-galeria.page';

describe('ComercioGaleriaPage', () => {
  let component: ComercioGaleriaPage;
  let fixture: ComponentFixture<ComercioGaleriaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComercioGaleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
