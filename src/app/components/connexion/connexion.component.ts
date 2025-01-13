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
    const user = this.user.find(u => u.username === username);
    this.statusText=="Connected";
    return true;
  }
  connect() {
      this.ispasswordValid(this.userInput, this.pwdInput);

    }  
  }
}
