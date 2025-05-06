import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurants';
import { config } from 'config';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCategories(url: string): Observable<Categories> {
    return this.http.get<Categories>(url);
  }

  getRestaurantMenu(id : number) : Observable<Restaurant>{
    return this.http.get<Restaurant>(`${config.RESTAURANT_URL}/${id}`)
  }

  getRestaurants(page: number): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${config.RESTAURANT_URL}?page=${page}`);
  }
}
