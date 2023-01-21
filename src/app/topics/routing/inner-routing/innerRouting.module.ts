import { NgModule } from "@angular/core";
import { RHomeComponent } from "./rhome/rhome.component";
import { RProductsComponent } from "./rproducts/rproducts.component";
import { RContactComponent } from "./rcontact/rcontact.component";
import { InnerRoutingComponent } from "./inner-routing.component";
import { RouterModule } from "@angular/router";
import { InnerRoutingModule } from "./inner-routing.module";
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    RHomeComponent,
    RProductsComponent,
    RContactComponent,
    InnerRoutingComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    RouterModule,
    InnerRoutingModule,
    CommonModule
  ],
  exports: [RHomeComponent, RProductsComponent, RContactComponent]
})
export class InnerAppRoutingModule { }