import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { QuizAuthorComponent } from './components/quiz-author/quiz-author.component';
import { QuizPopComponent } from './components/quiz-pop/quiz-pop.component';
import { SettingsPageMainComponent } from './components/settings-page-main/settings-page-main.component';
import { LanguagePipe } from './pipes/language.pipe';
import { FinalPopComponent } from './components/final-pop/final-pop.component';
import { QuizPictureComponent } from './components/quiz-picture/quiz-picture.component';
import { CategoriesItemComponent } from './components/categories-item/categories-item.component';
import { ScorePageComponent } from './components/score-page/score-page.component';
import { ScoreItemComponent } from './components/score-item/score-item.component';
import { AudioComponent } from './components/audio/audio.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesPageComponent,
    StartPageComponent,
    SettingsPageComponent,
    QuizAuthorComponent,
    QuizPopComponent,
    SettingsPageMainComponent,
    LanguagePipe,
    FinalPopComponent,
    QuizPictureComponent,
    CategoriesItemComponent,
    ScorePageComponent,
    ScoreItemComponent,
    AudioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
