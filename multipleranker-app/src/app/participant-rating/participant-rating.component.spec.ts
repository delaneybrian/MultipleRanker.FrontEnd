import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantRatingComponent } from './participant-rating.component';

describe('ParticipantRatingComponent', () => {
  let component: ParticipantRatingComponent;
  let fixture: ComponentFixture<ParticipantRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
