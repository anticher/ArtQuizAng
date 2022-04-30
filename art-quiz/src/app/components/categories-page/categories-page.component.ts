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
  public pageTitle: string = 'Categories'

  public scoreItemsStatus: string[] = []

  public items: number[] = []
  constructor(
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    ) {}

  ngOnInit(): void {
    const categoryType = this.activatedRoute.snapshot.routeConfig?.path
    const imageIndex = +this.activatedRoute.snapshot.queryParams['id']
    this.scoreItemsStatus = this.localStorageService.getFromLocal('quiz_' + imageIndex.toString()).split(' ')
    if (categoryType) {
      this.items = this.categoriesService.getCategoriesAndScoresImagesIndexes(categoryType, imageIndex)
    }
  }

}
