import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { StoreComponent } from '../store/store.component';
import { ModelModule } from 'src/Model/model.module';

@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    FormsModule
  ],
  declarations:[
    StoreComponent,
  ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
