import { Component, OnInit } from '@angular/core';
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
    ) { }

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
  
}
