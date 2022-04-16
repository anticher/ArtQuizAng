import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

const numberOfQuestions = 10

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.scss']
})
export class CategoriesItemComponent implements OnInit {
  @Input() itemId: number = 0;

  public isPlayedBefore: boolean = false;

  public score: number = 0

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const data = this.localStorageService.getFromLocal(`quiz_${this.itemId}`).split(' ')
    if (data.length === numberOfQuestions) {
      this.isPlayedBefore = true;
      data.forEach((element) => {
        if (element === 'correct') {
          this.score++
        }
      })
    }
  }

}
