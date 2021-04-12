import {ProductRepository} from './product.repository';
import {StaticDataSource} from './static.datasource';
import {NgModule, ɵɵinjectPipeChangeDetectorRef} from '@angular/core';

//import { CartLine } from 'src/app/store/cart.model';

@NgModule
({
  providers:[ProductRepository,StaticDataSource]//, CartLine]
})

export class ModelModule
{

}

