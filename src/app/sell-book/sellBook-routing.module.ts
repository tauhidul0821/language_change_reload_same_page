import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SellbookComponent } from './sellbook/sellbook.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'deal'
  },
  { 
    path: 'deal',
    component: SellbookComponent,
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellBookRoutingModule { }
