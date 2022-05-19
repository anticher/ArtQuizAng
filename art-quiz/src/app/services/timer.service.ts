import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TimerService {
  public timerValue$: BehaviorSubject<number> = new BehaviorSubject(30)

  public timesToPause: number = 2

  public timerInterval!: ReturnType<typeof setInterval>

  public isTimerWorks: boolean = false

  public isTimeGame$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  setTimerValue(value: number): void {
    this.isTimeGame$.next(true)
    this.timerValue$.next(value)
  }

  startTimer(): void {
    this.isTimerWorks = true
    this.timerInterval = setInterval(() => {
      this.timerValue$.next(this.timerValue$.value - 1)
    }, 1000)
  }

  stopTimer(): void {
    this.isTimerWorks = false
    clearInterval(this.timerInterval)
  }

  pauseTimer(): void {
    if (this.timesToPause && this.isTimerWorks) {
      this.timesToPause--
      this.stopTimer()
    } else if (!this.isTimerWorks) {
      this.startTimer()
    }
  }
}
