import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { ProfileFormComponent } from '../../components/profile-form/profile-form.component';
import { Profile } from '../../models';
import { ProfileDataService } from '../../services/profile-data.service';

@Component({
  selector: 'app-profile-form-page',
  imports: [ProfileFormComponent],
  templateUrl: './profile-form-page.component.html',
  styleUrl: './profile-form-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFormPageComponent {
  private readonly service = inject(ProfileDataService);

  protected readonly data = signal<Profile | undefined>(undefined);

  protected readonly ready = signal(false);

  constructor() {
    (async () => {
      const data = await this.service.get();

      this.data.set(data ?? undefined);
      this.ready.set(true);
    })();

    effect(() => {
      const data = this.data();

      if (data) {
        this.service.set(data);
      }
    });
  }
}
