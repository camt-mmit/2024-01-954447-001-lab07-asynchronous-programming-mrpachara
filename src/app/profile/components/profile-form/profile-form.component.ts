import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  linkedSignal,
  model,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  ReactiveFormsModule,
  ValueChangeEvent,
} from '@angular/forms';
import { filter, map, switchMap } from 'rxjs';
import { Profile } from '../../models';

@Component({
  selector: 'app-profile-form',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFormComponent {
  readonly data = model<Profile>();

  private readonly fb = inject(FormBuilder).nonNullable;

  private readonly createFriend = (friend?: string) =>
    this.fb.control(friend ?? '', {
      updateOn: 'blur',
    });

  private readonly createFormGroup = (data?: Profile | null) => {
    const fb = this.fb;

    return fb.group({
      studentId: fb.control(data?.studentId ?? '', {
        updateOn: 'blur',
      }),
      firstname: fb.control(data?.firstname ?? '', {
        updateOn: 'blur',
      }),
      lastname: fb.control(data?.lastname ?? '', {
        updateOn: 'blur',
      }),
      age: fb.control(data?.age ?? null!, {
        updateOn: 'blur',
      }),
      autobiography: fb.control(data?.autobiography ?? '', {
        updateOn: 'blur',
      }),
      friends: fb.array((data?.friends ?? [undefined]).map(this.createFriend)),
    });
  };

  private oldData?: Profile;

  protected readonly formGroup = linkedSignal<
    ReturnType<typeof this.data>,
    ReturnType<typeof this.createFormGroup>
  >({
    source: this.data,
    computation: (source, previous) => {
      if (typeof previous === 'undefined' || !Object.is(source, this.oldData)) {
        return this.createFormGroup(source);
      } else {
        return previous.value;
      }
    },
  });

  protected readonly friendsFormArray = computed(
    () => this.formGroup().controls.friends,
  );

  constructor() {
    toObservable(this.formGroup)
      .pipe(
        switchMap((formGroup) => formGroup.events),
        filter((event) => event instanceof ValueChangeEvent),
        map(() => this.formGroup().getRawValue()),
        takeUntilDestroyed(),
      )
      .subscribe((value) => {
        this.oldData = value;
        this.data.set(value);
      });
  }

  protected add(): void {
    this.friendsFormArray().push(this.createFriend());
  }

  protected remove(index: number): void {
    this.friendsFormArray().removeAt(index);
  }

  protected move(index: number, offset: number): void {
    const friendsFormArray = this.friendsFormArray();

    const tmp = friendsFormArray.controls[index + offset];
    friendsFormArray.controls[index + offset] =
      friendsFormArray.controls[index];
    friendsFormArray.controls[index] = tmp;

    friendsFormArray.updateValueAndValidity();
  }
}
