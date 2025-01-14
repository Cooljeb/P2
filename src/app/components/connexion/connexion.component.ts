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
  //Définition d'un utilisateur
  user ={
    lastname: 'BROU',
    firstname: 'Rémi',
    friend:['Emilie', 'Rémi','Paul'],
    password: '12345',
    isLoggedIn:true
  };  

  //propiété directement en lien avec le formulaire
  //on pourra les comparer avec les données de tableau (bdd)
  loginForm ={
    pseudo: '',
    password: ''
  };

  errors='';

  onSubmit() {
    if (this.login()) {
      this.errors = '';
      this.loginForm = { pseudo: '', password: '' };
      this.user = { ...this.user, isLoggedIn: true };
    } else {
      this.errors = 'Connexion impossible';
      setTimeout(() => (this.errors = ''), 2000);
    }
  }

  login() {
    const pseudo = this.loginForm.pseudo;
    const password = this.loginForm.password;

    return this.user.firstname === pseudo && this.user.password === password;
  }

  logout() {
    this.user = { ...this.user, isLoggedIn: false };
  }

     
}
