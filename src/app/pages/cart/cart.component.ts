import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from 'src/app/services/common.service';
import { CartItem, Dish } from 'src/app/models/dish';
import { Subject, takeUntil } from 'rxjs';
import { AddCartComponent } from "../../components/add-cart/add-cart.component";
import { roundUpToDecimal } from 'src/app/Utils/Utils';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AddCartComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(private commonSvc: CommonService) {}

  cart = [] as CartItem[];
  gst = 18;
  gstAmount = 0
  destroy$ = new Subject<void>();
  ngOnInit(): void {
    this.commonSvc.cart
      .pipe(takeUntil(this.destroy$))
      .subscribe((p) => (this.cart = p));
  }

  calculateTotal(){
    const price = this.cart.reduce((res, p) => {
      return res + p.dish.price * p.count
    },0)
    this.gstAmount = roundUpToDecimal(this.gst/100 * price,2);
    return roundUpToDecimal(price + this.gstAmount,2);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
