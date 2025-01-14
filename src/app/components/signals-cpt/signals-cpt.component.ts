import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals-cpt',
  imports: [FormsModule],
  templateUrl: './signals-cpt.component.html',
  styleUrl: './signals-cpt.component.css'
})
export class SignalsCptComponent {

  cpt = signal(0);
  plus = computed(() => this.cpt() +1);
  moins = computed(() => this.cpt()-1);
  texte=signal('mon texte en temps réel');

}
