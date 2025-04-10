import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  cart = new BehaviorSubject([] as Dish[]);

  addToCart(dish: Dish) {
    if (
      this.cart.value.length > 0 &&
      this.cart.value[0].restaurant_id !== dish.restaurant_id
    ) {
      this.cart.next([dish]);
    } else {
      this.cart.next([...this.cart.value, dish]);
    }
  }

  removeFromCart(dish: Dish) {
    let index = this.cart.value.indexOf(dish);
    console.log(this.cart.value.splice(index, 1))
    this.cart.next(this.cart.value.splice(index, 1));
  }
}
