import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ProfileViewComponent } from '../../components/profile-view/profile-view.component';
import { Profile } from '../../models';
import { ProfileDataService } from '../../services/profile-data.service';

@Component({
  selector: 'app-profile-view-page',
  imports: [ProfileViewComponent],
  templateUrl: './profile-view-page.component.html',
  styleUrl: './profile-view-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileViewPageComponent {
  private readonly service = inject(ProfileDataService);

  protected readonly data = signal<Profile | undefined>(undefined);

  protected readonly ready = signal(false);

  constructor() {
    (async () => {
      const data = await this.service.get();

      this.data.set(data ?? undefined);

      this.ready.set(true);
    })();
  }
}
