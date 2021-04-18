import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Admin/admin.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ChechOutComponent } from './chech-out/chech-out.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { StoreFirstGaurd } from './storefirst.guard';


const routes: Routes = [];

@NgModule({
  imports: [ BrowserModule, StoreModule,
             RouterModule.forRoot(
               [
                 {path:"store",component:StoreComponent,canActivate:[StoreFirstGaurd]},
                 {path:"cart", component:CartDetailsComponent,canActivate:[StoreFirstGaurd]},
                 {path:"checkout",component:ChechOutComponent,canActivate:[StoreFirstGaurd]},
                 {path:"admin", component: AdminComponent, canActivate:[StoreFirstGaurd]},
                 //{path:"admin", loadChildren: "./Admin/admin.module#AdminModule", canActivate:[StoreFirstGaurd]},
                 {path:"**", redirectTo:"/store"}
               ]
             )],
             providers:[StoreFirstGaurd],
  exports: [RouterModule]
})
export class AppRoutingModule { }
