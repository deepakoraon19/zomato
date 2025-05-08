import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "home", component:RestaurantGalleryComponent},
  {path: "sign-up", component:SignUpComponent},
  {path: "restaurant/:id", component:RestaurantMenuComponent},
  {path: "cart", component:CartComponent},
  {path: "", redirectTo:'login', pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
