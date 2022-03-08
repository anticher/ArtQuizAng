import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';
import { EngineService } from '../../services/engine.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  checkLang = true
  lang = 'en'
  constructor(
    private engineService: EngineService,
    private localStorageService: LocalStorageService,
    public languagesService: LanguagesService,
    ) { }

  ngOnInit(): void {
    this.checkLang = this.getLangFromLocalStorage()
  }

  settingsToDefaults() {
    this.engineService.setDefaultsLocal()
  }

  getLangFromLocalStorage(): boolean {
    this.lang = this.localStorageService.getToLocal('lang') ? this.localStorageService.getToLocal('lang')! : 'en'
    return this.localStorageService.getToLocal('lang') === 'en'
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
    return this.localStorageService.getToLocal(what) === 'true'
  }

  setSoundMusicTimerStatusToLocalStorage(what: string) {
    if (this.getSoundMusicTimerStatusFromLocalStorage(what)) {
      this.localStorageService.setToLocal(what, 'false')
     } else {
      this.localStorageService.setToLocal(what, 'true')
     }
  }

  getSoundMusicTimerValueFromLocalStorage(what: string): string | null {
    return (this.localStorageService.getToLocal(what))
  }

  setSoundMusicTimerValueToLocalStorage(what: string, event: Event) {
    const valueStr = ((<HTMLInputElement>event.target).value).toString()
    this.localStorageService.setToLocal(what, valueStr)
  }

}