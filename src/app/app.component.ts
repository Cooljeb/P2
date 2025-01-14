
import { Component, computed, signal } from '@angular/core';
import { RestaurantComponent } from "./components/restaurant/restaurant.component";
import { ConnexionComponent } from './components/connexion/connexion.component';
import { SignalsCptComponent } from './components/signals-cpt/signals-cpt.component';
import { BiblioComponent } from "./components/biblio/biblio.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RestaurantComponent, ConnexionComponent, SignalsCptComponent, BiblioComponent],
  //imports: [TdlComponent]
})
export class AppComponent {
  title = signal('Mon titre');
  nb = signal(10);//signal de 10
  double=computed(()=> this.nb() * 2);
}