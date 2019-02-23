import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  @Input() players;
  @Input() gamesCount;

  private SIZE = 3;

  private rows = Array(this.SIZE);
  private cols = Array(this.SIZE);

  private score;
  private moves;
  private turn;
  private currentGameCount = 0;

  constructor() { }

  ngOnInit() {
    this.startNewGame();
  }

  startNewGame() {
    if (this.currentGameCount < this.gamesCount) {
      this.currentGameCount++;

      this.score = {
        [this.players[0].symbol]: 0,
        [this.players[1].symbol]: 0
      };
      this.moves = 0;
      this.turn = this.players[0].symbol;
    }
  }

  win(clicked) {
    var attrs = clicked.target.getAttributeNames().filter((a) => a.includes("data-")).map(d => d.substr(5))
    for(let i = 0; i <= attrs.length; i++) {
      let cls = attrs[i];
      var items = this.contains(`.tictactoe [data-${cls}=''`, this.turn);
      if (items.length == this.SIZE) {
        return true;
      }
    }

    return false;
  }

  contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return [].filter.call(elements, function (element) {
      return RegExp(text).test(element.textContent);
    });
  }

  set(e) {
    e.target.innerHTML = this.turn;
    this.moves += 1;
    if (this.win(e)) {
      alert("Winner: " + this.turn);
    } else if (this.moves === this.SIZE * this.SIZE) {
      alert("Draw");
      this.startNewGame();
    } else {
      this.turn = (this.turn === this.players[0].symbol) ? this.players[1].symbol: this.players[0].symbol;
    }
  }
}
