import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {NgModule, ɵɵinjectPipeChangeDetectorRef} from '@angular/core';
import { Cart } from 'src/app/store/cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';

//import { CartLine } from 'src/app/store/cart.model';

@NgModule
({
  providers:[ProductRepository,
             StaticDataSource,
             Cart,
             Order,
             OrderRepository]
})

export class ModelModule
{

}

