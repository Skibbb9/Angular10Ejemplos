import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attdirective } from './attdirective';

describe('Attdirective', () => {
  let component: Attdirective;
  let fixture: ComponentFixture<Attdirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Attdirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Attdirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
