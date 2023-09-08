import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisventasPage } from './misventas.page';

describe('MisventasPage', () => {
  let component: MisventasPage;
  let fixture: ComponentFixture<MisventasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MisventasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
