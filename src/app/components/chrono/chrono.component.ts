import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  imports: [],
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.css'
})
export class ChronoComponent {

  btText="PLAY";
  seconds = 0;
  idInterval:any;

  toggleChrono(){

    //test de l'existance de l'interval
    if(this.idInterval){
      clearInterval(this.idInterval);
      this.idInterval = null;
      this.btText="PLAY";
      return;
      this.seconds ++;
    }
    this.btText="PAUSE";
    this.seconds++;
    this.idInterval = setInterval(()=>{}, 1000);

    setTimeout(() => {
      clearInterval(this.idInterval);  
    },3000);
  }

  resetChrono(){
  }

}
