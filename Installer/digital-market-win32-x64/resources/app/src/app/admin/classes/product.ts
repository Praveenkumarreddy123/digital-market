import { DataService } from '../services/data.service';

export class Product {
    id: string;
    name: string;
    description: string;
    price: string;
    category_id: number;
    created: string;
    modified: string;
    active: string;
    constructor(public service: DataService) {

    }
    createProduct(product: Product) {
        this.service.CreateProduct(product).subscribe((result) => {

        });
    }
    ProductList() {
      return  this.service.ProductList().subscribe((product: Product[]) => {
            product =   product.map((products, index, productList ) => {
              products.category_id = Number( products.category_id);
              return  productList[index] = products;
            });
        });
    }
}
