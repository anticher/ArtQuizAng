import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ImageInfo } from 'src/app/models/image-info.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { ImagesService } from 'src/app/services/images.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss']
})
export class ScorePageComponent implements OnInit {
  public pageTitle: string = 'Score'

  public scoreItemsStatus: string[] = []

  public items: number[] = []

  public itemsInfo: ImageInfo[] = []

  public subscriptions: Subscription = new Subscription

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private localStorageService: LocalStorageService,
    private imagesService: ImagesService
    ) { }

  ngOnInit(): void {
    const categoryType = this.activatedRoute.snapshot.routeConfig?.path
    const imageIndex = +this.activatedRoute.snapshot.params['id']
    this.scoreItemsStatus = this.localStorageService.getFromLocal('quiz_' + imageIndex.toString()).split(' ')
    this.subscriptions.add(this.imagesService.getImagesInfo().subscribe(value => {
      this.itemsInfo = value.slice(imageIndex, imageIndex + 10)
    }))
    if (categoryType) {
      this.items = this.categoriesService.getCategoriesAndScoresImagesIndexes(categoryType, imageIndex)
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
