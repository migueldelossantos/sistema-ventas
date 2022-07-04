import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/administracion/login/login.component';
import { RegistroComponent } from './modules/administracion/registro/registro.component';
import { ProductosComponent } from './modules/inventario/productos/productos.component';
import { MenuComponent } from './modules/menu/menu.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'menu', component:MenuComponent},

  {path:'inventario/productos',component:ProductosComponent},

  {path:'**',pathMatch:'full',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
