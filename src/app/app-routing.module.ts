import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LangchangeComponent } from './langchange/langchange.component';
import { LangchangtoSpanishComponent } from './langchangto-spanish/langchangto-spanish.component';


const routes: Routes = [
  {
    path: 'en/changelanguage',
    component: LangchangeComponent,
  },
  {
    path: 'es/changelanguage',
    component: LangchangtoSpanishComponent,
  },
  {
    path: 'newpages',
    loadChildren: () => import('./newpages/newpages.module').then(m => m.NewPagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
