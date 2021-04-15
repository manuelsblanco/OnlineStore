import { Component, OnInit } from '@angular/core';
import { Cart } from '../store/cart.model';


@Component({
  templateUrl: './cart-details.component.html'
})
export class CartDetailsComponent implements OnInit {

  numero:number=1;

  bajarCantidad()
  {
    if(this.numero>0)
    {
      this.numero--;
    }
    else
    {
      window.alert("Ya no se puede bajar mas la cantidad de articulos");
    }

  }
  subirCantidad()
  {
    this.numero++;
  }

  constructor(public cart: Cart)
  { }



  ngOnInit(): void {
  }

}
