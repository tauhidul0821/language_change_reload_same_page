import { NgModule } from "@angular/core";
import { NewPagesRoutingModule } from "./newpages-routing.module";
import { NewpagesComponent } from './newpages.component';

@NgModule({
  declarations: [NewpagesComponent],
  imports: [NewPagesRoutingModule]
})


export class NewPagesModule { }