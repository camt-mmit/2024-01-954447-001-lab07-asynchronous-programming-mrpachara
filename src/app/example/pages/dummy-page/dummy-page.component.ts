import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dummy-page',
  imports: [],
  templateUrl: './dummy-page.component.html',
  styleUrl: './dummy-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DummyPageComponent {

}
