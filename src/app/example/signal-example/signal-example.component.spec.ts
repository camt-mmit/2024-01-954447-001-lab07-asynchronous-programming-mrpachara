import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalExampleComponent } from './signal-example.component';

describe('SignalExampleComponent', () => {
  let component: SignalExampleComponent;
  let fixture: ComponentFixture<SignalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
