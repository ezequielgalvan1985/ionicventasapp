import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Chart } from 'chart.js';
import { EChartsOption } from 'echarts';
import { VentasPorProductosRequestDto } from 'src/app/dto/request/VentasPorProductosRequestDto';
import { VentasPorProductos } from 'src/app/models/ventasporproductos';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.page.html',
  styleUrls: ['./panel-control.page.scss'],
})
export class PanelControlPage implements OnInit {
  
  options!: EChartsOption;
  
  ventasPorProductosList=[] as VentasPorProductos[];
  ventasPorProductosRequestDto={}as VentasPorProductosRequestDto;
  productosDistinct = []as string[];
  xAxisData = [];
  


  constructor(private ventaService:VentasService){

  }
 

  ngOnInit() {

    this.fnFindVentasPorProductos();
   //const xAxisData = [];
    const data1 = [{}];
    const data2 = [{}];
    
   

/*
    for (let i = 0; i < 6; i++) {
      this.xAxisData.push('category' + i);
      //data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      //data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
  */ 
    
    // crear un array de array para almacenar las series mensuales
    //[ [][] ]
    /*
    this.ventasPorProductosList.forEach(element => {
      
      
      xAxisData.push(element.producto);
      data1.push(element.cantidad);
      
    });
    */


  }



  fnFindVentasPorProductos(){
    this.ventasPorProductosRequestDto.anio= (new Date()).getFullYear();
    this.ventasPorProductosRequestDto.empresaId = Number(localStorage.getItem("EmpresaId"));

    this.ventaService.ventasPorProductos(this.ventasPorProductosRequestDto).subscribe(r=> {
      this.ventasPorProductosList = r;
      console.log(JSON.stringify(this.ventasPorProductosList));



      // crear un array con los nombres de productos
      r.forEach(element => {
        this.productosDistinct.push(element.producto)
      });
      var aux = this.productosDistinct;
      
      var productosDistintos = aux.filter(function(item, pos){
        return aux.indexOf(item)== pos; 
      });
      this.productosDistinct = productosDistintos;

      //Leer Series por Producto
      this.fnGenerarChart();


    });

  }





  fnGenerarChart(){  
    const data1 = [10];
    const data2 = [20];

    this.options = {
      legend: {
        data: ['cerveza','alfajor'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: ['Ene','Feb','Mar','Abr'],
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'cerveza',
          type: 'bar',
          data: data1,
          animationDelay: idx => idx * 10,
        },

        {
          name: 'Alfajor',
          type: 'bar',
          data: data2,
          animationDelay: idx => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  
  }



}
