import { Component } from '@angular/core';
import { StatusSliderComponent } from './status-slider.component';

@Component({
  standalone: true,
  selector: 'app-status-slider-page',
  template: `
    <section>
      <h2>Status Slider</h2>
      <app-status-slider></app-status-slider>
    </section>
  `,
  imports: [StatusSliderComponent]
})
export class StatusSliderPageComponent {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/