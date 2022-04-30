import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { QuizAuthorComponent } from './components/quiz-author/quiz-author.component';
import { QuizPictureComponent } from './components/quiz-picture/quiz-picture.component';
import { ScorePageComponent } from './components/score-page/score-page.component';

const routes: Routes = [{
  path: '',
  component: StartPageComponent,
},
{ path: 'settings', component: SettingsPageComponent },
// { path: 'categories', component: CategoriesPageComponent },
{ path: 'author-quizes', component: CategoriesPageComponent },
{ path: 'author-quizes/score-page/:id', component: ScorePageComponent },
{ path: 'author-quizes/:id', component: QuizAuthorComponent },

{ path: 'picture-quizes', component: CategoriesPageComponent },
{ path: 'picture-quizes/score-page/:id', component: ScorePageComponent },
{ path: 'picture-quizes/:id', component: QuizPictureComponent },
// { path: 'products/:productId', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
