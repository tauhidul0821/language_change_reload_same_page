import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealComponent } from './deal/deal.component';
import { DealdetailsRoutingModule } from './dealdetails-routing.module';



@NgModule({
  declarations: [DealComponent],
  imports: [
    CommonModule,
    DealdetailsRoutingModule
  ]
})
export class DealdetailsModule { }
