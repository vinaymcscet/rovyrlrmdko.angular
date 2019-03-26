import { Component } from '@angular/core';

import { Hero, heroes } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  heroes = heroes;
  hero = this.heroes[0];

  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number { return hero.id; }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/