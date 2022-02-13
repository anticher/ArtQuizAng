import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { AuthorQuizesComponent } from './author-quizes/author-quizes.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesPageComponent,
    StartPageComponent,
    SettingsPageComponent,
    CategoryItemComponent,
    QuizPageComponent,
    AuthorQuizesComponent,
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
