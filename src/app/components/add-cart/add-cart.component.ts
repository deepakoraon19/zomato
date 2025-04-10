import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dish } from 'src/app/models/dish';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css'],
})
export class AddCartComponent implements OnInit {
  @Input() dish?: Dish;
  cart: Dish[] = [];
  count: number = 0;
  constructor(private commonSvc: CommonService) {}
  ngOnInit(): void {
    this.commonSvc.cart.subscribe((cart) => {
      this.count = cart.filter((p) => p.id === this.dish?.id).length;
      this.cart = cart;
    });
  }

  add() {
    this.dish && this.commonSvc.addToCart(this.dish);
  }
  remove() {
    this.dish && this.commonSvc.removeFromCart(this.dish);
  }
}
