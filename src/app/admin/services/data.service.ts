import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Product } from '../classes/product';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private WebserviceUrl = 'http://localhost:8080/Learning/EcommerceAPI-php/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
  public ProductList() {
    return this.http.get<Product[]>(this.WebserviceUrl + '/product/read');
  }
  public CreateProduct(CreateProduct: Product) {
    return  this.http.post<Product[]>(this.WebserviceUrl + '/product/create',
    {
      'name': CreateProduct.name,
      'description': CreateProduct.description,
      'price': CreateProduct.price,
      'created': CreateProduct.created
    }
    );
  }
}
