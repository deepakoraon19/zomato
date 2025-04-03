import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantGalleryComponent } from './pages/restaurant-gallery/restaurant-gallery.component';

export const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "home", component:RestaurantGalleryComponent},
  {path: "", redirectTo:'login', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
