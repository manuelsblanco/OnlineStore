import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {Product} from './product.model';
import {NgModule, ɵɵinjectPipeChangeDetectorRef} from '@angular/core';
import { NgModel } from '@angular/forms';
import { CartLine } from 'src/app/store/cart.model';

@NgModule
({
  providers:[ProductRepository,StaticDataSource, CartLine]
})

export class ModelModule
{

}

