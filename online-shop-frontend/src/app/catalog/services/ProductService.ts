import {Observable} from 'rxjs/Observable';
import {Product} from '../models/Product';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface ProductService {

  getProducts(): Observable<Product[]>;
}

@Injectable()
export class HttpProductService implements ProductService {

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/v01/products');
  }
}
