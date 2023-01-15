import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rproducts',
  templateUrl: './rproducts.component.html',
  styleUrls: ['./rproducts.component.css']
})
export class RProductsComponent implements OnInit {
  example: string | null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.example = params.get('example');
    });
  }

}
