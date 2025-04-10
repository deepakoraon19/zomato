import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurants';
import { groupBy } from 'src/app/Utils/Utils';
import { Dish } from 'src/app/models/dish';
import { AccordionModule } from 'primeng/accordion';
import { AddCartComponent } from '../../components/add-cart/add-cart.component';
import { CommonService } from 'src/app/services/common.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [CommonModule, AccordionModule, AddCartComponent],
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css'],
})
export class RestaurantMenuComponent implements OnInit, OnDestroy {
  constructor(
    private dataSvc: DataService,
    private route: ActivatedRoute,
    private commonSvc: CommonService
  ) {}

  restaurant: Restaurant | null = null;
  groups: Dish[][] = [];
  // cart: Dish[] = [];
  destroy$ = new Subject<void>();
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataSvc.getRestaurantMenu(Number(id)).subscribe((p) => {
      this.restaurant = p as Restaurant;
      groupBy(this.restaurant.restaurantMenus, (p) => p.category).forEach(
        (group) => this.groups.push(group)
      );
    });

    // this.commonSvc.cart.pipe(takeUntil(this.destroy$)).subscribe((p) => {
    //   this.cart = p;
    // });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
