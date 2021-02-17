import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewpagesComponent } from './newpages.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'buyBook'
  },
  { 
    path: 'newpages',
    component: NewpagesComponent,
  },
  {
    path: 'buyBook',
    loadChildren: () => import('../dealdetails/dealdetails.module').then(m => m.DealdetailsModule)
  },
  {
    path: 'sellBook',
    loadChildren: () => import('../sell-book/sell-book.module').then(m => m.SellBookModule)
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPagesRoutingModule { }
