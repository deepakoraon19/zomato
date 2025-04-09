import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Restaurant } from 'src/app/models/restaurants';
import { GetRestaurantNameDirective } from 'src/app/Directive/get-restaurant-name.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-tile',
  standalone: true,
  imports: [CommonModule, GetRestaurantNameDirective],
  templateUrl: './restaurant-tile.component.html',
  styleUrls: ['./restaurant-tile.component.css'],
})
export class RestaurantTileComponent {
  constructor(private router: Router) {}

  @Input() meal: Restaurant = {} as Restaurant;

  navigateToRestaurant() {
    this.router.navigate(['/restaurant', this.meal.index]);
  }
}
