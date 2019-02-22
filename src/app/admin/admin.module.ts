import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './routing/admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { DataService } from './services/data.service';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { SideNavBarComponent } from './shared/side-nav-bar/side-nav-bar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponent, ListProductComponent, CreateProductComponent, SideNavBarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService]
})
export class AdminModule { }
