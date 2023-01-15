import { NgModule } from "@angular/core";
import { RHomeComponent } from "./rhome/rhome.component";
import { RProductsComponent } from "./rproducts/rproducts.component";
import { RContactComponent } from "./rcontact/rcontact.component";
import { InnerRoutingComponent } from "./inner-routing.component";
import { RouterModule } from "@angular/router";
import { InnerRoutingModule } from "./inner-routing.module";

@NgModule({
  declarations: [
    RHomeComponent,
    RProductsComponent,
    RContactComponent,
    InnerRoutingComponent
  ],
  imports: [
    RouterModule,
    InnerRoutingModule
  ],
  exports: [RHomeComponent, RProductsComponent, RContactComponent]
})
export class InnerAppRoutingModule { }