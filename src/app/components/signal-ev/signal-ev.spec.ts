import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEv } from './signal-ev';

describe('SignalEv', () => {
  let component: SignalEv;
  let fixture: ComponentFixture<SignalEv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
