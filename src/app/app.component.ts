import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories, Meal } from './models/categories';
import { DataService } from './services/data.service';
import { Environment } from './environments/environment';
import { Restaurant } from './models/restaurants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private dataSvc: DataService) {}
  title = 'zomato';
  categories: Meal[] = [];
  // googleRes: googleScriptRes = {} as googleScriptRes;
  data: Restaurant[] = [];
  ngOnInit(): void {
    this.dataSvc.getCategories(Environment.categoryURL).subscribe(p => this.categories = p.meals)
    this.dataSvc
      .getRestaurants(`${Environment.API_URL}/api/Restaurant?page=0`)
      .subscribe((p) => {
        this.data = p;
      });
  }
}
