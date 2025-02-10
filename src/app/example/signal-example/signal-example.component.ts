import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.component.html',
  styleUrl: './signal-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalExampleComponent {
  protected readonly count = signal(0);

  protected doubleCountProp = this.count() * 2;

  protected readonly doubleCount = computed(() => this.count() * 2);

  protected readonly doublePlusOneCount = computed(
    () => this.doubleCount() + 1,
  );

  constructor() {
    const destroyRef = inject(DestroyRef);

    const intervalHandler = setInterval(() => {
      this.count.update((value) => value + 1);
      this.doubleCountProp = this.count() * 2;

      console.log('count:', this.count());
    }, 1_000);

    destroyRef.onDestroy(() => clearInterval(intervalHandler));
  }
}
