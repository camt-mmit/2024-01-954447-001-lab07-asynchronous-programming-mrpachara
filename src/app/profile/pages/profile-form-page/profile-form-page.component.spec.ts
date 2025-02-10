import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormPageComponent } from './profile-form-page.component';

describe('ProfileFormPageComponent', () => {
  let component: ProfileFormPageComponent;
  let fixture: ComponentFixture<ProfileFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
