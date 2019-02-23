import { Component, Input } from '@angular/core';
import { Joke } from './joke';

@Component({
    selector: 'joke',
    template: `
  <div class="card card-block">
    <h4 class="card-title">{{data.setup}}</h4>
    <p class="card-text" [hidden]="data.hide">{{data.punchline}}</p>
  </div>

  <ng-content select="div"></ng-content>

  <ng-content select="h1"></ng-content>
    `,
    styleUrls: ['./joke.component.css'],
})
export class JokeComponent {
    @Input('joke') data: Joke;
    age =20;
    getData() {
      return this.data;
    }
}