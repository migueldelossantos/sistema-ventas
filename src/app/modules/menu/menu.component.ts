import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from 'src/app/shared/models/administracion/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constanteMenuTemporal = [
    {
      menuId :'1',
      descripcion:'ninguna',
      desplegado:'Ventas',
      orden:1,
      opciones : [
        {
          opcionId : '1',
          icono:'ninguna',
          desplegado:'Realizar Venta',
          ruta: 'ventas/',
          orden:1
        },
        {
          opcionId : '2',
          icono:'ninguna',
          desplegado:'Ver Ventas del Día',
          orden:1,
          ruta: 'venta/diarias'
        },
        {
          opcionId : '3',
          icono:'ninguna',
          desplegado:'Reporte de Venas',
          orden:1,
          ruta:'ventas/reportes'
        }
      ]
    },
    {
      menuId :'2',
      descripcion:'ninguna',
      desplegado:'Compras',
      orden:1,
      opciones:[
        {
          opcionId : '1',
          icono:'ninguna',
          desplegado:'Realizar Compra',
          ruta: 'ventas/',
          orden:1
        },
        {
          opcionId : '2',
          icono:'ninguna',
          desplegado:'Ver Proveedores',
          orden:1,
          ruta: 'venta/diarias'
        },
        {
          opcionId : '3',
          icono:'ninguna',
          desplegado:'Reporte de Venas',
          orden:1,
          ruta:'ventas/reportes'
        }
      ]
    },
    {
      menuId :'3',
      descripcion:'ninguna',
      desplegado:'Inventario',
      orden:1,
      opciones:[
        {
          opcionId : '1',
          icono:'ninguna',
          desplegado:'Productos',
          ruta: 'inventario/productos',
          orden:1
        },
        {
          opcionId : '2',
          icono:'ninguna',
          desplegado:'Reportes',
          orden:1,
          ruta: 'venta/diarias'
        },
        {
          opcionId : '3',
          icono:'ninguna',
          desplegado:'Productos Resagados',
          orden:1,
          ruta:'ventas/reportes'
        }
      ]
    }
  ]

  //Verificar las Opciones del Menu las cuales se llenaran por medio de un Arreglo
  menu : MenuModel[] = []

  constructor(
    private router:Router
  ) {
    this.crearMenu();
  }

  ngOnInit(): void {
    
  }

  crearMenu(){
    this.menu = this.constanteMenuTemporal
    //console.log( this.menu[0].desplegado );
  }

  selectOpcion(ruta?:string){
    console.log('id :>> ',ruta);
    this.router.navigate([ruta])
  }

}
