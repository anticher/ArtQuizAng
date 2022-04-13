import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { QuizAuthorComponent } from './components/quiz-author/quiz-author.component';
import { QuizPopComponent } from './components/quiz-pop/quiz-pop.component';
import { SettingsPageMainComponent } from './components/settings-page-main/settings-page-main.component';
import { LanguagePipe } from './pipes/language.pipe';
import { FinalPopComponent } from './components/final-pop/final-pop.component';
import { QuizPictureComponent } from './components/quiz-picture/quiz-picture.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesPageComponent,
    StartPageComponent,
    SettingsPageComponent,
    CategoryItemComponent,
    QuizAuthorComponent,
    QuizPopComponent,
    SettingsPageMainComponent,
    LanguagePipe,
    FinalPopComponent,
    QuizPictureComponent,
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
