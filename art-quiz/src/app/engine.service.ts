import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor(private localStorageService: LocalStorageService) {
    this.setDefaultsLocal('firstLoad')
  }

  setDefaultsLocal(how?: string) {
    if (how === 'firstLoad') {
      if (!this.localStorageService.getToLocal('isSound')) {
        this.localStorageService.setToLocal('isSound', 'true')
        this.localStorageService.setToLocal('soundVolume', '0.5')
      }
      if (!this.localStorageService.getToLocal('isMusic')) {
        this.localStorageService.setToLocal('isMusic', 'false')
        this.localStorageService.setToLocal('musicVolume', '0.5')
      }
      if (!this.localStorageService.getToLocal('timeGame')) {
        this.localStorageService.setToLocal('timeGame', 'true')
        this.localStorageService.setToLocal('timeSpeed', '30')
      }
      if (!this.localStorageService.getToLocal('lang')) {
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


}
