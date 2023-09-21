import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meal } from 'src/app/models/categories';
import { Restaurant } from 'src/app/models/restaurants';

@Component({
  selector: 'app-restaurant-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-tile.component.html',
  styleUrls: ['./restaurant-tile.component.css']
})
export class RestaurantTileComponent implements OnInit {
  @Input() meal : Restaurant = {} as Restaurant

  ngOnInit(): void {
  }
}
