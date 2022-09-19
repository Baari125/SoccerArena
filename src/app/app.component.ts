import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SoccerArena';
  url = 'https://soccer-arena.herokuapp.com/api/players';

  getPlayers() {}
}
