import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComerciosPage } from './comercios.page';

describe('ComerciosPage', () => {
  let component: ComerciosPage;
  let fixture: ComponentFixture<ComerciosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComerciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
