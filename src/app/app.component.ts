
import { Component } from '@angular/core';
import { RestaurantComponent } from "./components/restaurant/restaurant.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RestaurantComponent],
  //imports: [TdlComponent]
})
export class AppComponent {
  //friends =['coco','lou','sarah' ];
  menus =['Menu A - Pouascaille',
     'Menu B - Viande Blanche',
     'Menu C - Fruits de Mer',
  ]
}