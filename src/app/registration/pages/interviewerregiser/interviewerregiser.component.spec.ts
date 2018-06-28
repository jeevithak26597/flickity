import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerregiserComponent } from './interviewerregiser.component';

describe('InterviewerregiserComponent', () => {
  let component: InterviewerregiserComponent;
  let fixture: ComponentFixture<InterviewerregiserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerregiserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerregiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
