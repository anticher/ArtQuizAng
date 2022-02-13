import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { AuthorQuizesComponent } from './author-quizes/author-quizes.component';

const routes: Routes = [{
  path: '',
  component: StartPageComponent,
},
{ path: 'settings', component: SettingsPageComponent },
// { path: 'categories', component: CategoriesPageComponent },
{ path: 'author-quizes', component: AuthorQuizesComponent },
// { path: 'products/:productId', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
