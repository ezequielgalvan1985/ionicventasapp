import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosPrepararPage } from './pedidos-preparar.page';

describe('PedidosPrepararPage', () => {
  let component: PedidosPrepararPage;
  let fixture: ComponentFixture<PedidosPrepararPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedidosPrepararPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
