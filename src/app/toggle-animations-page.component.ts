import { Component } from '@angular/core';
import { OpenCloseChildComponent } from './open-close.component.4';

@Component({
  standalone: true,
  selector: 'app-toggle-animations-child-page',
  template: `
    <section>
      <h2>Toggle Animations</h2>

      <app-open-close-toggle></app-open-close-toggle>
    </section>
  `,
  imports: [OpenCloseChildComponent]
})
export class ToggleAnimationsPageComponent {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/