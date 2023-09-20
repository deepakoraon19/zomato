import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantTileComponent } from './components/restaurant-tile/restaurant-tile.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarComponent,
    HttpClientModule,
    RestaurantTileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }