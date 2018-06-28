import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerContactComponent } from './interviewer-contact.component';

describe('InterviewerContactComponent', () => {
  let component: InterviewerContactComponent;
  let fixture: ComponentFixture<InterviewerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
