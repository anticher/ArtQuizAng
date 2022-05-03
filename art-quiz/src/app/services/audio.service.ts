import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private correctAudio: HTMLAudioElement = new Audio('../../assets/sounds/correct.mp3');
  private incorrectAudio: HTMLAudioElement = new Audio('../../assets/sounds/incorrect.mp3');
  private finalAudio: HTMLAudioElement = new Audio('../../assets/sounds/click.mp3');
  private mainMusic: HTMLAudioElement = new Audio('../../assets/sounds/backMusic.mp3');

  constructor(private localStorageService: LocalStorageService) {}

  public playMainMusic(): void {
    this.mainMusic.onended = () => {
      this.stopMainMusic()
      this. playMainMusic()
    }
    if (this.localStorageService.getFromLocal('isMusic') === 'true') {
      this.mainMusic.volume = +this.localStorageService.getFromLocal('musicVolume') / 100;
      this.mainMusic.play();
    } else {
      this.stopMainMusic()
    }
  }

  public stopMainMusic(): void {
    this.mainMusic.onended = null
    this.stopSound(this.mainMusic)
  }

  public changeMusicVolume(value: number): void {
    this.mainMusic.volume = value / 100
  }

  private stopSound(audio: HTMLAudioElement): void {
    audio.pause()
    audio.currentTime = 0
  }

  private checkSoundSettingsAndPlay(audio: HTMLAudioElement): void {
    if (this.localStorageService.getFromLocal('isSound') === 'true') {
      audio.volume = +this.localStorageService.getFromLocal('soundVolume') / 100;
      this.stopSound(audio)
      audio.play();
    }
  }

  public playCorrectSound(): void {
    this.checkSoundSettingsAndPlay(this.correctAudio)
  }

  public playIncorrectSound(): void {
    this.checkSoundSettingsAndPlay(this.incorrectAudio)
  }

  public playFinalSound(): void {
    this.checkSoundSettingsAndPlay(this.finalAudio)
  }
}
