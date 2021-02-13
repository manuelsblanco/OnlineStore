import { Injectable } from "@angular/core";
import { Product } from './product.model';
import {Observable, from } from "rxjs";

@Injectable()

export class StaticDataSource
{
  private products: Product[] = [
    new Product(1, "Flyraom Lace up shoe", "Category 1", "Sneaker shoe (Category 1)", 100),
    new Product(2, "T-Shirt", "Category 1", "Sports T-Shirt High Quality (Category 1)", 90),
    new Product(3, "TR Trail Short", "Category 1", "Running Shoes (Category 1)", 99),
    new Product(4, "Cooler", "Category 1", "Sneaker shoe (Category 1)", 50),
    new Product(5, "Graphic T-Shirt Grey L", "Category 1", "Cotton T-Shirt (Category 1)", 60),
    new Product(6, "Euphoria EDP 100 ml", "Category 2", "Liquid Amber, Black Violet, Cream (Category 2)", 70),
    new Product(7, "Eternity Moment EDP", "Category 2", "Brazilian Rose Wood (Category 2)", 100),
    new Product(8, "In red EDT 100ml", "Category 2", "Lily Jasmine (Category 2)", 100),
    new Product(9, "In Yellow Cascade", "Category 2", "Sneaker Bird (Category 2)", 100),
    new Product(10, "The Eternity of your Eyes", "Category 2", "Argentinian Leather (Category 2)", 100),
  ]

  getProducts(): Observable<Product[]>
  {
    return from([this.products]);
  }


}

