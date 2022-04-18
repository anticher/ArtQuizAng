import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  public isCategoryPage: boolean = false;

  public pageTitle: string = 'Categories'

  public scoreItemsStatus: string[] = []

  public items: number[] = []
  constructor(
    private categoriesService: CategoriesService,
    private activateRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    ) {}

  ngOnInit(): void {
    const categoryType = this.activateRoute.snapshot.routeConfig?.path
    if (categoryType !== 'score-page') {
      this.isCategoryPage = true
    } else {
      this.pageTitle = 'Scores'
    }
    const imageIndex = +this.activateRoute.snapshot.queryParams['id']
    this.scoreItemsStatus = this.localStorageService.getFromLocal('quiz_' + imageIndex.toString()).split(' ')
    if (categoryType) {
      this.items = this.categoriesService.getCategoriesAndScoresImagesIndexes(categoryType, imageIndex)
    }
  }

}
