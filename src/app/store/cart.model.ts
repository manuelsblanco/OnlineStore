import { Injectable} from '@angular/core';
import { Product } from './../../Model/product.model'

@Injectable()
export class Cart
{
  public Lines : CartLine[] = [];
  public itemCount : number = 0;
  public cartPrice: number = 0;

  private reCalculate()
  {
    this.itemCount=0;
    this.cartPrice=0;
    this.Lines.forEach(l=>
      {
        this.itemCount+=l.quantity;
        this.cartPrice+=(l.quantity*l.product.price);

      })

      console.log("El precio es "+this.cartPrice);
  }

  addLine(product:Product, quantity: number=1)
  {
    let line = this.Lines.find(line => line.product.id==product.id);
    if(line!=undefined)
    {
      line.quantity+=quantity;
    }
    else
    {
      this.Lines.push(new CartLine(product,quantity));
    }

    this.reCalculate()
  }

  updateQuantity(product:Product, quantity: number)
  {
    let line = this.Lines.find(line => line.product.id==product.id);
    if(line!=undefined)
    {
      line.quantity=quantity;
    }
    this.reCalculate();
    console.log("La cantidad es "+line?.quantity);
  }

  removeLine(id:number)
  {
    let index = this.Lines.findIndex(line=>line.product.id==id);
    this.Lines.splice(index,1);
    this.reCalculate();
  }

  clear()
  {
    this.Lines=[];
    this.itemCount=0;
    this.cartPrice=0;
  }
}


export class CartLine
{
  constructor(public product: Product, public quantity : number)
  {

  }

  get lineTotal()
  {
    return this.quantity*this.product.price;
  }


}


