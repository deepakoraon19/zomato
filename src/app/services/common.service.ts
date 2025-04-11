import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dish, CartItem } from '../models/dish';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {
    this.cart.subscribe(cart => localStorage.setItem("cart", JSON.stringify(cart)))
  }

  temp = localStorage.getItem("cart")
  private privateCart = new BehaviorSubject(this.temp ? JSON.parse(this.temp) as CartItem[] : [] as CartItem[]);
  cart = this.privateCart.asObservable();


  addToCart(dish: Dish) {
    if (
      this.privateCart.value.length > 0 &&
      this.privateCart.value[0].dish.restaurant_id !== dish.restaurant_id
    ) {
      this.privateCart.next([{ dish, count: 1 }]);
    } else {
      let index = this.privateCart.value.findIndex(
        (p) => p.dish.id === dish.id
      );
      if (index > -1) this.privateCart.value[index].count++;
      else this.privateCart.value.push({ dish, count: 1 });
      this.privateCart.next([...this.privateCart.value]);
    }

  }

  removeFromCart(dish: Dish) {
    let index = this.privateCart.value.findIndex((p) => p.dish.id === dish.id);
    if (index > -1) {
      if (this.privateCart.value[index].count > 1)
        this.privateCart.value[index].count--;
      else this.privateCart.value.splice(index, 1);
    }
    this.privateCart.next(this.privateCart.value);
  }
}
