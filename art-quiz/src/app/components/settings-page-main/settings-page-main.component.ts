import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { EngineService } from 'src/app/services/engine.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-settings-page-main',
  templateUrl: './settings-page-main.component.html',
  styleUrls: ['./settings-page-main.component.scss']
})
export class SettingsPageMainComponent implements OnInit {
  checkLang = true
  lang = 'en'

  constructor(
    private engineService: EngineService,
    private localStorageService: LocalStorageService,
    private audioService: AudioService,
    ) { }

    public ngOnInit(): void {
      this.checkLang = this.getLangFromLocalStorage()
    }
  
    private getLangFromLocalStorage(): boolean {
      this.lang = this.localStorageService.getFromLocal('lang') ? this.localStorageService.getFromLocal('lang')! : 'en'
      return this.localStorageService.getFromLocal('lang') === 'en'
    }

    public setLangToLocalStorage() {
     if (this.getLangFromLocalStorage()) {
      this.localStorageService.setToLocal('lang', 'ru')
     } else {
      this.localStorageService.setToLocal('lang', 'en')
      this.ngOnInit()
     }
    }
  
    public setSoundStatus(): void {
      this.engineService.setSoundMusicTimerStatusToLocalStorage('isSound')
    }
    
    public setMusicStatus(): void {
      this.engineService.setSoundMusicTimerStatusToLocalStorage('isMusic')
      if(!this.engineService.getSoundMusicTimerStatusFromLocalStorage('isMusic')) {
        this.audioService.stopMainMusic()
      } else {
        this.audioService.playMainMusic()
      }
    }

    public setTimerStatus(): void {
      this.engineService.setSoundMusicTimerStatusToLocalStorage('timeGame')
    }

    public getSoundStatus(): boolean {
      return this.engineService.getSoundMusicTimerStatusFromLocalStorage('isSound')
    }
    public getMusicStatus(): boolean {
      return this.engineService.getSoundMusicTimerStatusFromLocalStorage('isMusic')
    }
    public getTimerStatus(): boolean {
      return this.engineService.getSoundMusicTimerStatusFromLocalStorage('timeGame')
    }

    public setSoundValue(event: Event): void {
      this.engineService.setSoundMusicTimerValueToLocalStorage('soundVolume', event)
    }

    public setMusicValue(event: Event): void {
      this.engineService.setSoundMusicTimerValueToLocalStorage('musicVolume', event)
      this.audioService.changeMusicVolume(+((<HTMLInputElement>event.target).value))
    }

    public setTimerValue(event: Event): void {
      this.engineService.setSoundMusicTimerValueToLocalStorage('timeSpeed', event)
    }
    
    public getSoundValue(): string {
      const result = this.engineService.getSoundMusicTimerValueFromLocalStorage('soundVolume')
      return result ? result : ''
    }

    public getMusicValue(): string {
      const result = this.engineService.getSoundMusicTimerValueFromLocalStorage('musicVolume')
      return result ? result : ''
    }

    public getTimerValue(): string {
      const result = this.engineService.getSoundMusicTimerValueFromLocalStorage('timeSpeed')
      return result ? result : ''
    }

}
