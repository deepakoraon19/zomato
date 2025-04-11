import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MenubarModule, ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private router : Router){}
  items: MenuItem[] = [];

  logOut(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  goToCart(){
    this.router.navigate(['/cart'])
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Search',
        icon: 'pi pi-fw pi-search',
        styleClass : 'nav-item'
      },
      {
        label: 'Offer',
        icon: 'pi pi-fw pi-dollar',
        styleClass : 'nav-item'
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-globe',
        styleClass : 'nav-item'
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        styleClass : 'nav-item'
      },
      {
        label: 'Cart',
        icon: 'pi pi-fw pi-cart-plus',
        styleClass : 'nav-item',
        command:()=>this.goToCart()
      },
      {
        label: 'Log out',
        icon: 'pi pi-fw pi-sign-out',
        styleClass : 'nav-item',
        command:()=>this.logOut()
      },
    ];
  }
}
