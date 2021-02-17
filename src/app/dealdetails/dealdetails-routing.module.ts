import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DealComponent } from './deal/deal.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'deal'
  },
  { 
    path: 'deal',
    component: DealComponent,
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealdetailsRoutingModule { }
