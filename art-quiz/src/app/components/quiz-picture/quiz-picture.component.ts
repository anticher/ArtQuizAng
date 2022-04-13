import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageInfo } from 'src/app/models/image-info.model';
import { QuizPictureService } from 'src/app/services/quiz-picture.service';


@Component({
  selector: 'app-quiz-picture',
  templateUrl: './quiz-picture.component.html',
  styleUrls: ['./quiz-picture.component.scss'],
  providers: [QuizPictureService]
})
export class QuizPictureComponent implements OnInit {

  public target!: HTMLInputElement
  public questionsStatus: string[] = []
  public answersArray: string[] = []
  public imageInfo: ImageInfo = {author: '', name: '', year: '', imageNum: ''}
  public showPictures: boolean = true;
  public variantDisabled: boolean = false;
  public finalScore: string = ''

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private quizPictureService: QuizPictureService
  ) {
    const id = this.activateRoute.snapshot.params['id']
    this.imageInfo.imageNum = id
    this.quizPictureService.setId(id)
  }

  ngOnInit(): void {
    this.quizPictureService.answersSubject.subscribe((answers) => {
      this.answersArray = answers
    })
    this.quizPictureService.showPictureSubject.subscribe((result) => {
      this.showPictures = result
    })
    this.quizPictureService.imageInfoSubject.subscribe((imageInfo) => {
      this.imageInfo = imageInfo
    })
    this.quizPictureService.questionsStatusSubject.subscribe((value) => {
      this.questionsStatus = value
    })
    this.quizPictureService.finalScoreSubject.subscribe((value) => {
      this.finalScore = value
    })
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

}
