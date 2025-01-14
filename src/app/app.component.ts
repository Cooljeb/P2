
import { Component, signal } from '@angular/core';
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { ConnexionComponent } from './components/connexion/connexion.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RestaurantComponent,ConnexionComponent],
  //imports: [TdlComponent]
})
export class AppComponent {
  title = signal('Mon titre');
}