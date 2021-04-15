import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from '../store/store.component';
import { ModelModule } from 'src/Model/model.module';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { ChechOutComponent } from '../chech-out/chech-out.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    FormsModule,
    RouterModule
  ],
  declarations:[
    StoreComponent,
    CartSummaryComponent,
    CartDetailsComponent,
    ChechOutComponent
  ],
  exports: [
    StoreComponent,
    CartDetailsComponent,
    ChechOutComponent
  ]
})
export class StoreModule { }
