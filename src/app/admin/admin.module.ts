import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './routing/admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [LoginComponent, ListProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  providers: [DataService]
})
export class AdminModule { }
