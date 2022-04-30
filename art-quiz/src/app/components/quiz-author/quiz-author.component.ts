import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizAuthorService } from 'src/app/services/quiz-author.service';
import { ImageInfo } from 'src/app/models/image-info.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-author-page',
  templateUrl: './quiz-author.component.html',
  styleUrls: ['./quiz-author.component.scss'],
  providers: [QuizAuthorService]
})
export class QuizAuthorComponent implements OnInit, OnDestroy {
  public target!: HTMLInputElement

  public questionsStatus: string[] = []

  public answersArray: string[] = []

  public imageInfo: ImageInfo = {author: '', name: '', year: '', imageNum: ''}

  public showPicture: boolean = true;

  public variantDisabled: boolean = false;

  public finalScore: string = ''

  public subscribtions: Subscription = new Subscription

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private quizAuthorService: QuizAuthorService
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

  public ngOnDestroy(): void {
    this.subscribtions.unsubscribe()
  }
}
