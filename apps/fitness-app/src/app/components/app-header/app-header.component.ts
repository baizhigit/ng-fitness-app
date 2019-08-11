import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

import { User } from 'app/auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @Input() user: User;

  @Output() logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }
}
