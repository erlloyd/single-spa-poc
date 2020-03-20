import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { ShipDetailComponent } from "./ship-detail/ship-detail.component";
import { ShipsListComponent } from "./ships-list/ships-list.component";

const routes: Routes = [
  { path: "ships", component: ShipsListComponent },
  { path: "ships/:id", component: ShipDetailComponent },
  { path: "**", component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppRoutingModule {}
