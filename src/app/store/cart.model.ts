import { Injectable } from "@angular/core";
import { Product } from './../../Model/product.model';

Product

@Injectable()
export class Cart
{
  public Lines : CartLine[] = [];
  public itemCount : number = 0 ;
  public cartPrice : number = 0;

  //Methods
  addLine(product: Product, quantity: number = 1)
  {
    let line = this.Lines.find(line => line.product.id == product.id);
    if(line != undefined)
    {
        line.quantity += quantity;
    }
    else
    {
        this.Lines.push(new CartLine(product, quantity));
    }
    this.reCalculate()
  }
  updateQuantity(product: Product, quantity: number = 1)
  {
    let line = this.Lines.find(line => line.product.id == product.id);
    if(line!=undefined)
    {
      line.quantity = Number(quantity);
    }
    this.reCalculate();
  }
  removeLine(id:number)
  {
    let index = this.Lines.findIndex(line => line.product.id ==id);
    this.Lines.splice(index,1);
    this.reCalculate();
  }
  clear()
  {
    this.Lines=[];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private reCalculate()
  {
    this.itemCount=0;
    this.cartPrice=0;
    this.Lines.forEach(a=>
      {
        this.itemCount += a.quantity;
        this.cartPrice += (a.quantity * Number(a.product.price));
      })
  }
}



export class CartLine
{
  constructor(public product: Product,
              public quantity: number)
              {

              }

  get lineTotal()
  {
    return this.quantity * <any>this.product.price;
  }


}
