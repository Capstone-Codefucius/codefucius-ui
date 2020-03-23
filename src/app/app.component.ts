import { Component } from '@angular/core';
import {trigger, state, style, animate, transition, } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [trigger('triggerName'), [state('stateName', style()) transition('stateChangeExpression', [Animation Steps])] ]
})

export class AppComponent {
  title = 'codefucius-ui';
}
