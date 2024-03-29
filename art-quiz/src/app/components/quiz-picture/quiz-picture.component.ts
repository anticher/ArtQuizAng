import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ImageInfo } from 'src/app/models/image-info.model';
import { QuizPictureService } from 'src/app/services/quiz-picture.service';
import { TimerService } from 'src/app/services/timer.service';


@Component({
  selector: 'app-quiz-picture',
  templateUrl: './quiz-picture.component.html',
  styleUrls: ['./quiz-picture.component.scss'],
  providers: [QuizPictureService, TimerService]
})
export class QuizPictureComponent implements OnInit, OnDestroy {
  public target!: HTMLInputElement

  public questionsStatus: string[] = []

  public answersArray: string[] = []

  public imageInfo: ImageInfo = {author: '', name: '', year: '', imageNum: ''}

  public showPictures: boolean = true;

  public variantDisabled: boolean = false;

  public timerDisabled: boolean = false;

  public isTimeGame: boolean = false
  
  public finalScore: string = ''

  public timerValue: string = ''

  public subscribtions: Subscription = new Subscription

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private quizPictureService: QuizPictureService,
    private timerService: TimerService
  ) { }

  ngOnInit(): void {
    this.setId()
    this.subscribtions.add(this.quizPictureService.answersSubject.subscribe((answers) => {
      this.answersArray = answers
    }))
    this.subscribtions.add(this.quizPictureService.showPictureSubject.subscribe((result) => {
      this.showPictures = result
    }))
    this.subscribtions.add(this.quizPictureService.imageInfoSubject.subscribe((imageInfo) => {
      this.imageInfo = imageInfo
    }))
    this.subscribtions.add(this.quizPictureService.questionsStatusSubject.subscribe((value) => {
      this.questionsStatus = value
    }))
    this.subscribtions.add(this.quizPictureService.finalScoreSubject.subscribe((value) => {
      this.finalScore = value
    }))
    this.subscribtions.add(this.quizPictureService.variantDisabledSubject.subscribe((value) => {
      this.variantDisabled = value
      this.timerDisabled = value
    }))
    this.subscribtions.add(this.timerService.isTimeGame$.subscribe((value) => {
      this.isTimeGame = value
    }))
    this.subscribtions.add(this.timerService.timerValue$.subscribe((value) => {
      if (value) {
        this.timerValue = value.toString()
      } else {
        this.timerValue = '0'
        this.quizPictureService.onTimerEnds();
      }
    }))
  }

  private setId(): void {
    const id = this.activateRoute.snapshot.params['id']
    this.imageInfo.imageNum = id
    this.quizPictureService.setId(id)
  }

  public nextQuestion(): void {
    this.quizPictureService.nextQuestion()

  }

  public onVariantClick(event: Event): void {
    this.quizPictureService.handleAnswer(event);
  }

  public returnToCategories(): void {
    this.router.navigate(['picture-quizes'])
  }

  public pauseTimer(): void {
    this.timerService.pauseTimer()
  }

  public ngOnDestroy(): void {
    this.subscribtions.unsubscribe()
  }
}
