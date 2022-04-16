import { Component, OnInit } from '@angular/core';
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

  constructor(private engineService: EngineService,
    private localStorageService: LocalStorageService,) { }

    ngOnInit(): void {
      this.checkLang = this.getLangFromLocalStorage()
    }
  
    settingsToDefaults() {
      this.engineService.setDefaultsLocal()
    }
  
    getLangFromLocalStorage(): boolean {
      this.lang = this.localStorageService.getFromLocal('lang') ? this.localStorageService.getFromLocal('lang')! : 'en'
      return this.localStorageService.getFromLocal('lang') === 'en'
    }
    setLangToLocalStorage() {
     if (this.getLangFromLocalStorage()) {
      this.localStorageService.setToLocal('lang', 'ru')
     } else {
      this.localStorageService.setToLocal('lang', 'en')
      this.ngOnInit()
     }
    }
  
    getSoundMusicTimerStatusFromLocalStorage(what: string): boolean | null {
      return this.localStorageService.getFromLocal(what) === 'true'
    }
  
    setSoundMusicTimerStatusToLocalStorage(what: string) {
      if (this.getSoundMusicTimerStatusFromLocalStorage(what)) {
        this.localStorageService.setToLocal(what, 'false')
       } else {
        this.localStorageService.setToLocal(what, 'true')
       }
    }
  
    getSoundMusicTimerValueFromLocalStorage(what: string): string | null {
      return (this.localStorageService.getFromLocal(what))
    }
  
    setSoundMusicTimerValueToLocalStorage(what: string, event: Event) {
      const valueStr = ((<HTMLInputElement>event.target).value).toString()
      this.localStorageService.setToLocal(what, valueStr)
    }

}
