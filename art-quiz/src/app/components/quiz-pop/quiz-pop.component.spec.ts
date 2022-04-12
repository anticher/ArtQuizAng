import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPopComponent } from './quiz-pop.component';

describe('QuizPopComponent', () => {
  let component: QuizPopComponent;
  let fixture: ComponentFixture<QuizPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
