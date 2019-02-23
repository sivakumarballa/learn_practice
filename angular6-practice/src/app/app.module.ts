import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ComponentTemplatesComponent } from './component-templates/component-templates.component';
import { JokeListComponent } from './jokeList/jokelist.component';
import { JokeComponent } from './joke/joke.component';
import { HighlightDirective } from './highlight.directive';
import { SivaPipe } from './siva.pipe';
import { TictactoeComponent } from './tictactoe/tictactoe.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ComponentTemplatesComponent,
    JokeListComponent,
    JokeComponent,
    HighlightDirective,
    SivaPipe,
    TictactoeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
