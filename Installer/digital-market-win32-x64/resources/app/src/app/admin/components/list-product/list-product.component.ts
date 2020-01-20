import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Product } from '../../classes/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  public productList = new Array<Product>();
  constructor(public service: DataService) {
    this.service.ProductList().subscribe((product: Product[]) => {
      this.productList = product;
      this.productList =   this.productList.map((products, index, productList ) => {
        products.category_id = Number( products.category_id);
        return  productList[index] = products;
      });
    });
   }
  ngOnInit() {
  }

}
