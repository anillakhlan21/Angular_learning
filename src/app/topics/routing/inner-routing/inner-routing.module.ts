import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InnerRoutingComponent } from "./inner-routing.component";
import { RHomeComponent } from "./rhome/rhome.component";
import { RContactComponent } from "./rcontact/rcontact.component";
import { RProductsComponent } from "./rproducts/rproducts.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";

const innerRoutes: Routes = [
  {
    path: '', component: InnerRoutingComponent, children: [
      { path: 'home', component: RHomeComponent },
      { path: 'contact', component: RContactComponent },
      { path: 'products', component: RProductsComponent },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'user/:id',
        component: UserComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(innerRoutes)],
  exports: [RouterModule]
})
export class InnerRoutingModule { }