import { Injectable } from "@angular/core"
import { Product} from "src/Model/product.model";

@Injectable()
export class Cart
{
  public Lines : CartLine[] = [];
  public itemCount :  number = 0;
  public cartPrice : number = 0;

  addLine(product: Product, quantity: number=1)
  {
    let line = this.Lines.find(line =>line.product.id == product.id)
    if(line != undefined)
    {
      line.quantity += quantity;
    }
    else
    {
      this.Lines.push(new CartLine(product,quantity));
    }

    this.reCalc()
  }

  updateQuantity(product: Product, quantity: number)
  {
    let line = this.Lines.find(line=> line.product.id == product.id);
    if(line!=undefined)
    {
      line.quantity = Number(quantity);
    }

    this.reCalc()
  }

  removeLines(id: number)

  {
    let index = this.Lines.findIndex(line => line.product.id==id);

    this.Lines.splice(index,1);

    this.reCalc()
  }

  clear()
  {
    this.Lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private reCalc()
  {
    this.itemCount=0;
    this.cartPrice=0;

    this.Lines.forEach(l=>
      {
        this.itemCount+=l.quantity;
        this.cartPrice+=(l.quantity*l.product.price);
      })
  }

}

export class CartLine
{
 constructor(public product : Product,
             public quantity : number)
             {

             }

  get linetotal()
  {
    return this.quantity * this.product.price;
  }


}
