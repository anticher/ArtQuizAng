import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { QuizPageComponent } from './components/quiz-page/quiz-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesPageComponent,
    StartPageComponent,
    SettingsPageComponent,
    CategoryItemComponent,
    QuizPageComponent,
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
