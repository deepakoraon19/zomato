import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, Dish } from 'src/app/models/dish';
import { CommonService } from 'src/app/services/common.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css'],
})
export class AddCartComponent implements OnInit, OnDestroy {
  @Input() dish?: Dish;
  cart = [] as CartItem[];
  count: number = 0;
  destroy$ = new Subject<void>();
  constructor(private commonSvc: CommonService) {}

  ngOnInit(): void {
    this.commonSvc.cart.pipe(takeUntil(this.destroy$)).subscribe((cart) => {
      this.count = cart.find(p => p.dish.id === this.dish?.id)?.count ?? 0
      this.cart = cart;
    });
  }

  add() {
    this.dish && this.commonSvc.addToCart(this.dish);
  }

  remove() {
    this.dish && this.commonSvc.removeFromCart(this.dish);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getCount() {
    return this.dish && this.cart.some(p => p.dish.id === this.dish?.id);
  }
}
