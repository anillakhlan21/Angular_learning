import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { LoggerService } from 'src/app/services/logger.service';
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
  constructor(private productService: ProductService,private loggerService: LoggerService) {
    // this.productService=new ProductService();
  }

  ngOnInit(): void {
    this.loggerService.debug("this is a debug log");
    this.loggerService.error("there is some error");
    this.loggerService.info("this is info log");
    this.loggerService.warn("this is a warning log")
  }

  getProducts() {
    this.products=this.productService.getProducts();
  }

}
