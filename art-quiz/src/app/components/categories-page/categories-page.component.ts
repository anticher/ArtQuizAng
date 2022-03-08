import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { LanguagesService } from 'src/app/services/languages.service';


@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  items: number[] = []
  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    public languagesService: LanguagesService
    ) {}

  ngOnInit(): void {
    const categoryType = this.router.url.substring(1)
    this.items = this.categoriesService.getCategoriesAndScoresImagesIndexes(categoryType)
    // console.log(this.router.url)
    // console.log(this.categoriesService.getCategoriesAndScoresImagesIndexes('author-quizes'))
    // console.log(this.categoriesService.getCategoriesAndScoresImagesIndexes('picture-quizes'))
    // console.log(this.categoriesService.getCategoriesAndScoresImagesIndexes('paintersScore', 1))
    // console.log(this.categoriesService.getCategoriesAndScoresImagesIndexes('picturesScore', 40))
  }

}
