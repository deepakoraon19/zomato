import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantTileComponent } from "../../components/restaurant-tile/restaurant-tile.component";
import { Environment } from 'src/app/environments/environment';
import { DataService } from 'src/app/services/data.service';
import { Restaurant } from 'src/app/models/restaurants';

@Component({
  selector: 'app-restaurant-gallery',
  standalone: true,
  imports: [CommonModule, RestaurantTileComponent],
  templateUrl: './restaurant-gallery.component.html',
  styleUrls: ['./restaurant-gallery.component.css']
})
export class RestaurantGalleryComponent implements OnInit {
  constructor(private dataSvc : DataService) {}
  data: Restaurant[] = [];
  ngOnInit(): void {
    this.dataSvc
      .getRestaurants(`${Environment.API_URL}/api/Restaurant?page=0`)
      .subscribe((p) => {
        this.data = p;
      });
  }

}
