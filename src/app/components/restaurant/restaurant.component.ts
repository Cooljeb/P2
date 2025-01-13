import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-restaurant',
  imports: [FormsModule,CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  myTitle = 'Menu';
  myDescription = 'Choisi ton menu préféré';
  menuChoisi='';

  menu :any= [
    { nom:'Menu A - Pouascaille',
      détails:'Sandre grillé',
      prix:'12€'
    },
    { nom:'Menu B - Viande Blanche',
      détails:'Viande blanche grasse',
      prix:'15€'
    },
    { nom:'Menu C - Fruits de Mer',
      détails:'Fruits de mer écrasés',
      prix:'10€'
    }

  ]
  
  menuDetail : string ="";
  menuPrix : string="";

  onSelectMenu(){
    console.log(this.menuChoisi);
    switch(this.menuChoisi){

      case this.menu[0].nom:
        this.menuDetail = this.menu[0].détails;
        this.menuPrix = this.menu[0].prix;
        break;
        case this.menu[1].nom:
          this.menuDetail = this.menu[1].détails;
          this.menuPrix = this.menu[1].prix;
          break;
        case this.menu[2].nom:
          this.menuDetail = this.menu[2].détails;
          this.menuPrix = this.menu[2].prix;
          break;
        default:
          this.menuDetail = "Menu non trouvé";
          this.menuPrix = "";
          break;
 
   }
   this.menuDetail="";
   this.menuPrix="";
   
 
  }
}
