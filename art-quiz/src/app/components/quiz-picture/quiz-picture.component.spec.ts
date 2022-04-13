import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPictureComponent } from './quiz-picture.component';

describe('QuizPictureComponent', () => {
  let component: QuizPictureComponent;
  let fixture: ComponentFixture<QuizPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
