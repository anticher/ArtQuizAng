import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor(private localStorageService: LocalStorageService) { }

  setDefaultsLocal(how?: string) {
    if (how === 'firstLoad') {
      if (!this.localStorageService.getFromLocal('isSound')) {
        this.localStorageService.setToLocal('isSound', 'true')
        this.localStorageService.setToLocal('soundVolume', '0.5')
      }
      if (!this.localStorageService.getFromLocal('isMusic')) {
        this.localStorageService.setToLocal('isMusic', 'false')
        this.localStorageService.setToLocal('musicVolume', '0.5')
      }
      if (!this.localStorageService.getFromLocal('timeGame')) {
        this.localStorageService.setToLocal('timeGame', 'true')
        this.localStorageService.setToLocal('timeSpeed', '30')
      }
      if (!this.localStorageService.getFromLocal('lang')) {
        this.localStorageService.setToLocal('lang', 'en')
      }
    } else {
      this.localStorageService.setToLocal('lang', 'en')
      this.localStorageService.setToLocal('isSound', 'true')
      this.localStorageService.setToLocal('soundVolume', '0.5')
      this.localStorageService.setToLocal('isMusic', 'false')
      this.localStorageService.setToLocal('musicVolume', '0.5')
      this.localStorageService.setToLocal('timeGame', 'true')
      this.localStorageService.setToLocal('timeSpeed', '30')
      // createOrDeleteAudio()
      // settingsCreateActions()
    }
  }
  
  public static shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  public static getRandomInt(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
