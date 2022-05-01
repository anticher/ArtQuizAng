import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizAuthorService } from 'src/app/services/quiz-author.service';
import { ImageInfo } from 'src/app/models/image-info.model';
import { Subscription } from 'rxjs';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './quiz-author.component.html',
  styleUrls: ['./quiz-author.component.scss'],
  providers: [QuizAuthorService, TimerService]
})
export class QuizAuthorComponent implements OnInit, OnDestroy {
  public target!: HTMLInputElement

  public questionsStatus: string[] = []

  public answersArray: string[] = []

  public imageInfo: ImageInfo = {author: '', name: '', year: '', imageNum: ''}

  public showPicture: boolean = true;

  public variantDisabled: boolean = false;

  public timerDisabled: boolean = false;

  public finalScore: string = ''

  public timerValue: number | string = ''

  public subscribtions: Subscription = new Subscription

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private quizAuthorService: QuizAuthorService,
    private timerService: TimerService
  ) {}

  public ngOnInit(): void {
    this.setId()
    this.subscribtions.add(this.quizAuthorService.answersSubject.subscribe((answers) => {
      this.answersArray = answers
    }))
    this.subscribtions.add(this.quizAuthorService.showPictureSubject.subscribe((result) => {
      this.showPicture = result
    }))
    this.subscribtions.add(this.quizAuthorService.imageInfoSubject.subscribe((imageInfo) => {
      this.imageInfo = imageInfo
    }))
    this.subscribtions.add(this.quizAuthorService.questionsStatusSubject.subscribe((value) => {
      this.questionsStatus = value
    }))
    this.subscribtions.add(this.quizAuthorService.finalScoreSubject.subscribe((value) => {
      this.finalScore = value
    }))
    this.subscribtions.add(this.quizAuthorService.variantDisabledSubject.subscribe((value) => {
      this.variantDisabled = value
      this.timerDisabled = value
    }))
    this.subscribtions.add(this.timerService.timerValue$.subscribe((value) => {
      if (value === 999) {
        this.timerValue = ''
      } else {
        this.timerValue = value
      }
      if (value === 0) {
        this.quizAuthorService.onTimerEnds();
      }
    }))
  }

  private setId(): void {
    const id = this.activateRoute.snapshot.params['id']
    this.imageInfo.imageNum = id
    this.quizAuthorService.setId(id)
  }

  public nextQuestion(): void {
    this.quizAuthorService.nextQuestion()

  }

  public onVariantClick(event: Event): void {
    this.quizAuthorService.handleAnswer(event);
  }

  public returnToCategories(): void {
    this.router.navigate(['author-quizes'])
  }

  public pauseTimer(): void {
    this.timerService.pauseTimer()
  }

  public ngOnDestroy(): void {
    this.subscribtions.unsubscribe()
  }
}
