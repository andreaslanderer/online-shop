import {Component, Inject, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {ProductService} from './services/ProductService';
import {Product} from './models/Product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [
    { provide: 'productService', useClass: environment.productServiceType }
  ]
})
export class CatalogComponent implements OnInit {

  products: Product[] = [];

  columnDefs = [
    { headerName: 'Product Id', field: 'productId' },
    { headerName: 'Name', field: 'productName' },
    { headerName: 'Description', field: 'productDescription' },
    { headerName: 'Price', field: 'productPrice' }
  ];

  constructor(@Inject('productService') private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getProducts().subscribe((prods: Product[]) => {
      this.products = prods;
    }, (err) => {
      console.log(err);
    });
  }

}
