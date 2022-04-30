import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss']
})
export class ScorePageComponent implements OnInit {
  public pageTitle: string = 'Score'

  public scoreItemsStatus: string[] = []

  public items: any = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private localStorageService: LocalStorageService
    ) { }

  ngOnInit(): void {
    const categoryType = this.activatedRoute.snapshot.routeConfig?.path
    const imageIndex = +this.activatedRoute.snapshot.params['id']
    this.scoreItemsStatus = this.localStorageService.getFromLocal('quiz_' + imageIndex.toString()).split(' ')
    if (categoryType) {
      this.items = this.categoriesService.getCategoriesAndScoresImagesIndexes(categoryType, imageIndex)
    }
  }
}
