import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosEnviarPage } from './pedidos-enviar.page';

describe('PedidosEnviarPage', () => {
  let component: PedidosEnviarPage;
  let fixture: ComponentFixture<PedidosEnviarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedidosEnviarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
