import { Component, Input, ViewChild, QueryList, ViewChildren, ElementRef, ContentChild } from '@angular/core';
import { Joke } from '../joke/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
    selector: 'joke-list',
    template: `
  <h4 #header>View Jokes</h4>
  <joke *ngFor="let j of jokes" [joke]="j">
    <span class="setup">{{ j.setup }}?</span>
    <h1 class="punchline">{{ j.punchline }}</h1>
  </joke>
  
  <h4>Content Jokes</h4>
  <ng-content></ng-content>
  `,
    styleUrls: ['./jokelist.component.css'],
})
export class JokeListComponent {
    jokes: Joke[] = [
        new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
        new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
    ];

    @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
    @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
    @ViewChild("header") header: ElementRef;

    @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

    ngAfterViewInit() {
        console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
        let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
        console.log(jokes);
    }
}