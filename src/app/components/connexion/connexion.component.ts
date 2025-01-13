import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  imports: [FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  userTitle : string = "Connexion";
  pwdTitle : string = "Mot de passe";
  userInput : string = "";
  pwdInput : string = "";
  statusText : string = "";
  user : [
    { username: "admin", password: "admin", description: "Administrateur" },
    { username: "user", password: "user" , description: "Utilisateur"}
  ];

  ispasswordValid(username: string, password: string): boolean {
    let user = this.user.find(u => u.username === username);
    return true;
  }
  connect() {
    if (this.ispasswordValid(this.userInput, this.pwdInput)) {
      
    }  
  }
}
