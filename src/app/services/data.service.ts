import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { Observable } from 'rxjs';
import { Dishes } from '../models/dish';
import { googleScriptRes } from '../models/response';
import { Restaurant } from '../models/restaurants';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCategories(url: string): Observable<Categories> {
    return this.http.get<Categories>(url);
  }

  getDishes(url: string, category: string): Observable<Dishes> {
    return this.http.get<Dishes>(url + category);
  }

  getRestaurants(url: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(url);
  }
}
