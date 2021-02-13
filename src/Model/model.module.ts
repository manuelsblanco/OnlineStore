import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {Product} from './product.model';
import {NgModule, ɵɵinjectPipeChangeDetectorRef} from '@angular/core';
import { NgModel } from '@angular/forms';

@NgModule
({
  providers:[ProductRepository,StaticDataSource]
})

export class ModelModule
{

}

