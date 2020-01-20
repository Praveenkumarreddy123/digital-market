import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ListProductComponent } from '../components/list-product/list-product.component';
import { CreateProductComponent } from '../components/create-product/create-product.component';
const routes: Routes = [
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
  {path: 'admin/login', component: LoginComponent},
  {path: 'admin/product-list', component: ListProductComponent},
  {path: 'admin/create-product', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
