import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tdl',
  imports: [FormsModule],
  templateUrl: './tdl.component.html',
  styleUrl: './tdl.component.css'
})
export class TdlComponent {
  myTitle = 'Saisir ton prénom';
  monPrenom='';

  users = [
    { name:'coco',tasks:['Faire le menage','Faire la salle','Faire les courses']},
    { name:'lou',tasks:['Faire le ménage','Faire la cuisine','Faire les courses']},
  ];

  userSelected ='coco'; 
  currentTasks : string[] =[];

  onSelectUser() {
    this.currentTasks = [];
    switch(this.userSelected) {
      case this.users[0].name:
        this.currentTasks = this.users[0].tasks;
        break;
      case this.users[1].name:
        this.currentTasks = this.users[1].tasks;
        break;
    }

  }

}
