import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantGalleryComponent } from './restaurant-gallery.component';

describe('RestaurantGalleryComponent', () => {
  let component: RestaurantGalleryComponent;
  let fixture: ComponentFixture<RestaurantGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RestaurantGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
