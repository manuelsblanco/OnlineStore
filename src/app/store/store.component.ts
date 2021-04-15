import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/Model/product.model';
import { ProductRepository } from "./../../Model/product.repository";
import { Cart } from './cart.model';


@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory:string="";
  public productsPerPage = 4;
  public selectPage = 1;

  constructor(private repository: ProductRepository,
              private cart: Cart,
              private router: Router)
  {}

  category: string = '';

  ngOnInit(): void {

  }

  get products() :  Product[]
  {
    let pageIndex = (this.selectPage-1)*this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
          .slice(pageIndex,pageIndex+this.productsPerPage);
  }

  get categories() : string[]
  {
    return this.repository.getCategories();
  }

  changeCategory(newCategory:string)
  {
    this.selectedCategory = newCategory;
  }

  changePage(newPage:number)
  {
    this.selectPage=Number(newPage);
  }


  changePageSize(newSize:number)
  { let cualca;
    cualca=newSize;
    this.productsPerPage=cualca;
    this.changeCategory(<any>1);
  }

  get pageNumbers(): number[]
  {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage)).fill(0).map((x,i)=> i+1);
  }

  addProductToCart(product: Product)
  {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

}
