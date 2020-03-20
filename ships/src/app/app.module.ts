import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { ShipsListComponent } from "./ships-list/ships-list.component";
import { ShipDetailComponent } from "./ship-detail/ship-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    ShipsListComponent,
    ShipDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
