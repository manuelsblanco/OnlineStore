import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Model/product.model';
import { ProductRepository } from "./../../Model/product.repository";
import { StoreModule } from './store.module'

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private repository: ProductRepository)
  {}

  category: string = '';

  ngOnInit(): void {

  }

  get prodcucts() :  Product[]
  {
    return this.repository.getProducts(this.category);
  }

  get categories() : string[]
  {
    return this.repository.getCategories();
  }

}
