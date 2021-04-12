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

  public selectedCategory:string="";
  public productsPerPage = 4;
  public selectPage = 1;

  constructor(private repository: ProductRepository)
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

  numberTwo()
  {
    this.productsPerPage=2;
    console.log("El valor del numero es "+this.productsPerPage);
  }
  numberFour()
  {
    this.productsPerPage=4;
    console.log("El valor del numero es "+this.productsPerPage);
  }
  numberSix()
  {
    this.productsPerPage=6;
    console.log("El valor del numero es "+this.productsPerPage);
  }
  numberEight()
  {
    this.productsPerPage=8;
    console.log("El valor del numero es "+this.productsPerPage);
  }
  numberTen()
  {
    this.productsPerPage=10;
    console.log("El valor del numero es "+this.productsPerPage);
  }

}
