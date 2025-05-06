import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantTileComponent } from '../../components/restaurant-tile/restaurant-tile.component';
import { Environment } from 'src/app/environments/environment';
import { DataService } from 'src/app/services/data.service';
import { Restaurant } from 'src/app/models/restaurants';

@Component({
  selector: 'app-restaurant-gallery',
  standalone: true,
  imports: [CommonModule, RestaurantTileComponent],
  templateUrl: './restaurant-gallery.component.html',
  styleUrls: ['./restaurant-gallery.component.css'],
})
export class RestaurantGalleryComponent implements OnInit {
  constructor(private dataSvc: DataService) {}
  data: Restaurant[] = [];
  page = 0;
  loadingData = false;

  ngOnInit(): void {
    this.fetchRestaurant();
  }

  private fetchRestaurant() {
    this.loadingData = true
    this.dataSvc
      .getRestaurants(this.page)
      .subscribe((p) => {
        this.data = [...this.data, ...p];
        this.loadingData = false
      });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    const buffer = 250;
    const atBottom = scrollPosition >= pageHeight - buffer;

    if (atBottom && !this.loadingData) {
      this.page++;
      this.fetchRestaurant();
    }
  }
}
