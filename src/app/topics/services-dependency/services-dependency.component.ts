import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-services-dependency',
  templateUrl: './services-dependency.component.html',
  styleUrls: ['./services-dependency.component.css'],
  // providers: [ProductService]
})
export class ServicesDependencyComponent implements OnInit {
  products:Product[];
  //  productService: any;
  constructor(private productService: ProductService) { 
    // this.productService=new ProductService();
  }

  ngOnInit(): void {
  }

  getProducts() {
    this.products=this.productService.getProducts();
  }

}
