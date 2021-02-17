import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellbookComponent } from './sellbook/sellbook.component';
import { SellBookRoutingModule } from './sellBook-routing.module';



@NgModule({
  declarations: [SellbookComponent],
  imports: [
    CommonModule,
    SellBookRoutingModule
  ]
})
export class SellBookModule { }
