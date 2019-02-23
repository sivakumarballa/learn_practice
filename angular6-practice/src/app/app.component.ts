import { Component, ViewChild, Input} from '@angular/core';
import { ComponentTemplatesComponent } from './component-templates/component-templates.component';
import { Joke } from './joke/joke';

interface Player {
  name: string;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players: Player[] = [{
    name: "",
    symbol: ""
  }, {
    name: "",
    symbol: ""
  }];
  gamesCount: number = 0;
  canStartGame: boolean = false;

  startGame() {
    if (this.players[0].name === "" || this.players[0].symbol === "" || 
      this.players[1].name === "" || this.players[1].symbol === "" || this.gamesCount <= 0) {
        alert("Fill all the details");
    } else {
      this.canStartGame = true;
    }
  }
}
