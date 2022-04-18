import { Component, OnInit } from '@angular/core';
import { EngineService } from '../../services/engine.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})

export class SettingsPageComponent implements OnInit {
  public checkLang: boolean = true;

  public lang: string = 'en';

  constructor(
    private engineService: EngineService,
    private localStorageService: LocalStorageService,
    ) { }

  public ngOnInit(): void {
    this.checkLang = this.getLangFromLocalStorage()
  }

  public settingsToDefaults(): void {
    this.engineService.setDefaultsLocal()
  }

  public getLangFromLocalStorage(): boolean {
    this.lang = this.localStorageService.getFromLocal('lang') ? this.localStorageService.getFromLocal('lang')! : 'en'
    return this.localStorageService.getFromLocal('lang') === 'en'
  }
  
}
