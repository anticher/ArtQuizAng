import { Component, OnInit } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  painterQuizString = ''
  pictureQuizString = ''
  settingsString = ''
  
  constructor(
    private languagesService: LanguagesService
  ) { }

  ngOnInit(): void {
   this.painterQuizString = this.languagesService.getTextInRightLang('Painter quiz')
   this.pictureQuizString = this.languagesService.getTextInRightLang('Picture quiz')
   this.settingsString = this.languagesService.getTextInRightLang('Settings')
  }
}
