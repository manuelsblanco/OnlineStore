import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/Model/order.model';
import { OrderRepository } from 'src/Model/order.repository';


@Component({
  templateUrl: './chech-out.component.html'
})
export class ChechOutComponent implements OnInit {

  orderSent:boolean=false;
  submitted:boolean=false;


  constructor(public repository: OrderRepository,
              public order: Order)
  {

  }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm)
  {
    this.submitted=true;
    if(form.valid)
    {
      this.repository.saveOrder(this.order)
      .subscribe(order =>{
        this.order.clear();
        this.orderSent=true;
        this.submitted=false;
      })
    }
  }

}
