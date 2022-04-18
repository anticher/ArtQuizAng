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
  
    public getSoundMusicTimerStatusFromLocalStorage(what: string): boolean | null {
      return this.localStorageService.getFromLocal(what) === 'true'
    }
  
    public setSoundMusicTimerStatusToLocalStorage(what: string) {
      if (this.getSoundMusicTimerStatusFromLocalStorage(what)) {
        this.localStorageService.setToLocal(what, 'false')
       } else {
        this.localStorageService.setToLocal(what, 'true')
       }
    }
  
    public getSoundMusicTimerValueFromLocalStorage(what: string): string | null {
      return (this.localStorageService.getFromLocal(what))
    }
  
    public setSoundMusicTimerValueToLocalStorage(what: string, event: Event) {
      const valueStr = ((<HTMLInputElement>event.target).value).toString()
      this.localStorageService.setToLocal(what, valueStr)
    }

}
