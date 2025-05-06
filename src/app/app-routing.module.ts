import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantGalleryComponent } from './pages/restaurant-gallery/restaurant-gallery.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RestaurantMenuComponent } from './pages/restaurant-menu/restaurant-menu.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  {path: "login",loadChildren: () => import('./pages/login/login.component').then(m => m.LoginComponent)},
  {path: "home",loadChildren: () => import('./pages/restaurant-gallery/restaurant-gallery.component').then(m => m.RestaurantGalleryComponent)},
  {path: "sign-up", loadChildren:()=>import("./pages/sign-up/sign-up.component").then(m => m.SignUpComponent)},
  {path: "restaurant/:id",loadChildren:()=>import("./pages/restaurant-menu/restaurant-menu.component").then(m => m.RestaurantMenuComponent)},
  {path: "cart",loadChildren:()=>import("./pages/cart/cart.component").then(m => m.CartComponent)},
  {path: "", redirectTo:'login', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
