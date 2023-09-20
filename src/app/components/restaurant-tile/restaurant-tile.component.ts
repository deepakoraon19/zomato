import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meal } from 'src/app/models/categories';

@Component({
  selector: 'app-restaurant-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-tile.component.html',
  styleUrls: ['./restaurant-tile.component.css']
})
export class RestaurantTileComponent implements OnInit {
  @Input() meal ?: Meal

  ngOnInit(): void {
  }
}
