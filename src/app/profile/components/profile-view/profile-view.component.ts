import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { Profile } from '../../models';

@Component({
  selector: 'app-profile-view',
  imports: [],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileViewComponent {
  readonly data = input.required<Profile>();

  protected friends = computed(() => this.data().friends.join(', '));
}
