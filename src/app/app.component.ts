import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories, Meal } from './models/categories';
import { DataService } from './services/data.service';
import { Environment } from './environments/environment';
import { googleScriptRes } from './models/response';
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
  googleRes: googleScriptRes = {} as googleScriptRes;
  data: Restaurant[] = [];
  ngOnInit(): void {
    // this.dataSvc.getCategories(Environment.categoryURL).subscribe(p => this.categories = p.meals)
    this.dataSvc.getRestaurants(Environment.googleURL).subscribe((p) => {
      this.googleRes = p;
      this.googleRes.data.forEach((j) => {
        this.data.push({
          index: j[0],
          city: j[1],
          state: j[2],
          zipcode: j[3],
          address: j[4],
          loc_name: j[5],
          loc_number: j[6],
          url: j[7],
          promotion: j[8],
          latitude: j[9],
          longitude: j[10],
          is_open: j[11],
          closed_message: j[12],
          delivery_fee: j[13],
          delivery_time: j[14],
          review_count: j[15],
          review_rating: j[16],
          price_bucket: j[17],
          img1: j[18],
          img2: j[19],
          img3: j[20],
          img4: j[21],
          img5: j[22],
          scan_date: j[23],
          TID: j[24],
        } as Restaurant);
      });
    });
  }
}
