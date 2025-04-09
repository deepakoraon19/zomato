import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantGalleryComponent } from './pages/restaurant-gallery/restaurant-gallery.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RestaurantMenuComponent } from './pages/restaurant-menu/restaurant-menu.component';

export const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "home", component:RestaurantGalleryComponent},
  {path: "sign-up", component:SignUpComponent},
  {path: "restaurant/:id", component:RestaurantMenuComponent},
  {path: "", redirectTo:'login', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
