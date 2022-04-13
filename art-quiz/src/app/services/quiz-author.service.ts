import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ImageInfo } from '../models/image-info.model';
import { ImagesService } from './images.service';

@Injectable()
export class QuizAuthorService {
  public target!: HTMLInputElement
  public firstId: number = 0
  public id: number = 0
  public lastId: number = 0
  public questionsStatusId: number = 0
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
  ])
  public answersArray: string[] = []
  public answersSubject: Subject<string[]> = new Subject<string[]>()
  public correctAnswer: string = ''
  public imagesInfo: ImageInfo[] = []
  public imageInfoSubject: Subject<ImageInfo> = new Subject<ImageInfo>()
  public showPictureSubject: Subject<boolean> = new Subject<boolean>()
  public variantDisabledSubject: Subject<boolean> = new Subject<boolean>()
  public finalScoreSubject: Subject<string> = new Subject<string>()

  constructor(public imagesService: ImagesService) { }

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
    this.correctAnswer = this.imagesInfo[this.id].author
    this.answersArray.push(this.correctAnswer)
    while (this.answersArray.length < 4) {
      const index = this.getRandomInt(0, 240)
      if (!this.answersArray.includes(this.imagesInfo[index].author)) {
        this.answersArray.push(this.imagesInfo[index].author)
      }
    }

    this.shuffleArray(this.answersArray)
    this.answersSubject.next(this.answersArray)
  }

  public deletePreviousQuestion(): void {
    this.target.classList.remove('choose-author-page__answer-green')
    this.target.classList.remove('choose-author-page__answer-red')
    this.answersArray = []
  }



  public nextQuestion(): void {
    if (this.lastId === this.id) {
      this.showFinalPop()
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
    if (this.target.textContent === this.correctAnswer) {
      this.onCorrectAnswer()
    } else {
      this.onIncorrectAnswer()
    }
  }

  private showPop(): void {
    this.showPictureSubject.next(false);
  }

  private showFinalPop(): void {
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
    this.target.classList.add('choose-author-page__answer-green')
    let questionsStatus = []
    const subcription = this.questionsStatusSubject.subscribe((value) => {
      questionsStatus = [...value]
    })
    subcription.unsubscribe()
    questionsStatus[this.questionsStatusId] = 'correct'
    this.questionsStatusSubject.next(questionsStatus)
  }

  private onIncorrectAnswer(): void {
    this.target.classList.add('choose-author-page__answer-red')
    let questionsStatus = []
    const subcription = this.questionsStatusSubject.subscribe((value) => {
      questionsStatus = [...value]
    })
    subcription.unsubscribe()
    questionsStatus[this.questionsStatusId] = 'incorrect'
    this.questionsStatusSubject.next(questionsStatus)
  }

  public shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  public getRandomInt(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
