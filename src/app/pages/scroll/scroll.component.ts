import { Component, inject, signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TestingProductsService } from '../../services/testing-products.service'
import { Product } from '../../models/products';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling'

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ScrollingModule],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent {
  products = signal<Product[]>([]);


  private productsService = inject(TestingProductsService);


  ngOnInit() {
    this.getProductList();
  }

  async getProductList() {
    await new Promise<void>((resolve) => {
      this.productsService
        .getProducts()
        .subscribe({
          next: (data) => {
            this.products.set(data);
            resolve();
          },
          error: (err) => {
            console.error('Error fetching products:', err);
            resolve();
          }
        });
    });
  }
}
