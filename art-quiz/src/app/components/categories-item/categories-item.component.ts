import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

const numberOfQuestions = 10

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.scss']
})
export class CategoriesItemComponent implements OnInit {
  @Input() itemId: number = 0;

  @Input() isCategoriesItem: boolean = false;

  @Input() scoreItemStatus: string = '';

  public isPlayedBefore: boolean = false;

  public score: number = 0

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.isCategoriesItem) {
      const data = this.localStorageService.getFromLocal(`quiz_${this.itemId}`).split(' ')
      if (data.length === numberOfQuestions) {
        this.isPlayedBefore = true;
        data.forEach((element) => {
          if (element === 'correct') {
            this.score++
          }
        })
      }
    } else {
      console.log(this.scoreItemStatus)
    }

  }

  goToScorePage() {
    this.router.navigate(['/score-page'], { queryParams: { id: this.itemId } });
  }

}
