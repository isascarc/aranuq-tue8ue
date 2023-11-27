import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Hero } from './hero';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-hero-list-auto',
  templateUrl: 'hero-list-auto.component.html',
  styleUrls: ['./hero-list-page.component.css'],
  imports: [NgFor],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ])
    ])
  ]
})
export class HeroListAutoComponent {
   @Input() heroes: Hero[] = [];

   @Output() remove = new EventEmitter<number>();

   removeHero(id: number) {
     this.remove.emit(id);
   }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/