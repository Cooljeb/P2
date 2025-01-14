import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-biblio',
  imports: [FormsModule],
  templateUrl: './biblio.component.html',
  styleUrl: './biblio.component.css'
})
export class BiblioComponent {
nouveauLivre = signal(
  {

  titre: '',
  auteur: '',
  editeur: '',
  annee: '',
  genre: ''
  });

  mesLivres=signal([
    {
      titre: 'Le Seigneur des Anneaux',
      auteur: 'J.R.R. Tolkien',
      editeur: 'Georges Brais',
      annee: '1954',
      genre: 'Fantastique',
    },
    {
      titre: '1984',
      auteur: 'George Orwell',
      editeur: 'George Allen & Unwin',
      annee: '1949',
      genre: 'Dystopie',
    },
    {
      titre: 'Pride and Prejudice',
      auteur: 'Jane Austen',
      editeur: 'J.B. Lippincott',
      annee: '1813',
      genre: 'Romance',
    }
  ]);

  afficherFormulaire = false; // État initial : formulaire caché

  toggleFormulaire() {
    this.afficherFormulaire = !this.afficherFormulaire;
  }

    ajouterLivre(){

        // Ajouter le nouveau livre à la liste
        this.mesLivres.update((livres) => [...livres, this.nouveauLivre()]);
      
        // Réinitialiser le formulaire
        this.nouveauLivre.set({
          titre: '',
          auteur: '',
          editeur: '',
          annee: '',
          genre: '',
        });
      this.toggleFormulaire();  // On cache le formulaire après ajout du livre
  }

  supprimerLivre(){
    // Supprimer le livre sélectionné
    const indexLivreASupprimer = this.mesLivres().findIndex((livre) => livre.titre === this.nouveauLivre().titre);
    this.mesLivres.update((livres) => [...livres.slice(0, indexLivreASupprimer),...livres.slice(indexLivreASupprimer + 1)]);
  }

  // 


}
