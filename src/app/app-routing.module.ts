import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'login',
    component: LoginComponent 
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: '**',
    redirectTo: 'products'
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
