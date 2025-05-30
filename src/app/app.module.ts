import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RestaurantTileComponent } from './components/restaurant-tile/restaurant-tile.component';
import { DataViewModule } from 'primeng/dataview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarComponent,
    HttpClientModule,
    RestaurantTileComponent,
    DataViewModule,
    BrowserAnimationsModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
