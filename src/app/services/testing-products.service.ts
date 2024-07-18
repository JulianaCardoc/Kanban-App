import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class TestingProductsService {

  private http = inject(HttpClient);

  constructor() {}

  getProducts() {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
}
