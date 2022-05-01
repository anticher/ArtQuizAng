import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ImageInfo } from '../models/image-info.model';
import { ImagesService } from './images.service';
import { EngineService } from './engine.service';
import { LocalStorageService } from './local-storage.service';
import { AudioService } from './audio.service';


@Injectable()
export class QuizPictureService {
  public target!: HTMLInputElement;

  public firstId: number = 0;

  public id: number = 0;

  public lastId: number = 0;

  public questionsStatusId: number = 0;

  public questionsStatusSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([
    'active',
    'incomplete',
    'incomplete',
    'incomplete',
    'incomplete',
    'incomplete',
    'incomplete',
    'incomplete',
    'incomplete',
    'incomplete'
  ]);

  public answersArray: string[] = [];

  public answersSubject: Subject<string[]> = new Subject<string[]>();

  public correctAnswer: string = '';

  public imagesInfo: ImageInfo[] = [];

  public imageInfoSubject: Subject<ImageInfo> = new Subject<ImageInfo>();

  public showPictureSubject: Subject<boolean> = new Subject<boolean>();

  public variantDisabledSubject: Subject<boolean> = new Subject<boolean>();

  public finalScoreSubject: Subject<string> = new Subject<string>();

  constructor(
    private imagesService: ImagesService,
    private localStorageService: LocalStorageService,
    private audioService: AudioService,
    ) { }

  public setId(id: string): void {
    this.firstId = +id
    this.id = +id
    this.lastId = this.id + 9
    this.getImagesInfo()
  }

  private getImagesInfo(): void {
    this.imagesService.getImagesInfo().subscribe(res => {
      this.imagesInfo = res
      this.questionInit()
    })
  }

  private questionInit(): void {
    this.imageInfoSubject.next(this.imagesInfo[this.id])
    const correctAnswerAuthor = this.imagesInfo[this.id].author
    this.correctAnswer = this.imagesInfo[this.id].imageNum
    this.answersArray.push(this.imagesInfo[this.id].imageNum)
    while (this.answersArray.length < 4) {
      const index = EngineService.getRandomInt(0, 240)
      if (this.imagesInfo[index].author !== correctAnswerAuthor) {
        this.answersArray.push(this.imagesInfo[index].imageNum)
      }
    }
    EngineService.shuffleArray(this.answersArray)
    this.answersSubject.next(this.answersArray)
  }

  private deletePreviousQuestion(): void {
    this.target.classList.remove('choose-author-page__answer-green')
    this.target.classList.remove('choose-author-page__answer-red')
    this.answersArray = []
  }

  public nextQuestion(): void {
    if (this.lastId === this.id) {
      this.showFinalPop()
      this.sendResultsToServer()
    } else {
      this.id++
      this.questionsStatusId++
      let questionsStatus = []
      const subcription = this.questionsStatusSubject.subscribe((value) => {
        questionsStatus = [...value]
      })
      subcription.unsubscribe()
      questionsStatus[this.questionsStatusId] = 'active'
      this.questionsStatusSubject.next(questionsStatus)
      this.deletePreviousQuestion()
      this.questionInit()
      this.hidePop()
      this.variantDisabledSubject.next(false);
    }
  }

  public handleAnswer(event: Event): void {
    this.showPop()
    this.variantDisabledSubject.next(true);
    this.target = <HTMLInputElement>event.target
    const answerImageUrl = this.target.style.backgroundImage
    const answerIdStart = answerImageUrl.lastIndexOf('/') + 1
    const answerIdEnd = answerImageUrl.lastIndexOf('.jpg')
    const answerId = answerImageUrl.substring(answerIdStart, answerIdEnd)
    if (answerId === this.correctAnswer) {
      this.onCorrectAnswer()
    } else {
      this.onIncorrectAnswer()
    }
  }

  private showPop(): void {
    this.showPictureSubject.next(false);
  }

  private showFinalPop(): void {
    this.audioService.playFinalSound()
    let score = 0
    const subcription = this.questionsStatusSubject.subscribe((value) => {
      value.forEach((status) => {
        if (status === 'correct') {
          score++
        }
      })
    })
    subcription.unsubscribe()
    this.finalScoreSubject.next(score.toString())
  }

  private hidePop(): void {
    this.showPictureSubject.next(true);
  }

  private onCorrectAnswer(): void {
    this.audioService.playCorrectSound()
    this.target.classList.add('choose-picture-page__item-green')
    let questionsStatus = []
    const subcription = this.questionsStatusSubject.subscribe((value) => {
      questionsStatus = [...value]
    })
    subcription.unsubscribe()
    questionsStatus[this.questionsStatusId] = 'correct'
    this.questionsStatusSubject.next(questionsStatus)
  }

  private onIncorrectAnswer(): void {
    this.audioService.playIncorrectSound()
    this.target.classList.add('choose-picture-page__item-red')
    let questionsStatus = []
    const subcription = this.questionsStatusSubject.subscribe((value) => {
      questionsStatus = [...value]
    })
    subcription.unsubscribe()
    questionsStatus[this.questionsStatusId] = 'incorrect'
    this.questionsStatusSubject.next(questionsStatus)
  }

  private sendResultsToServer(): void {
    console.log(this.firstId)
    console.log(this.answersArray)
    this.localStorageService.setToLocal(`quiz_${this.firstId}`, this.questionsStatusSubject.value.join(' '))
  }
}
