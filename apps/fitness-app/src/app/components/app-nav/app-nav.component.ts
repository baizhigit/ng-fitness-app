import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  constructor() {}
}
