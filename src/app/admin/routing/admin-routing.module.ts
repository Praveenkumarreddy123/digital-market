import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ListProductComponent } from '../components/list-product/list-product.component';
const routes: Routes = [
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
  {path: 'admin/login', component: LoginComponent},
  {path: 'admin/product-list', component: ListProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
