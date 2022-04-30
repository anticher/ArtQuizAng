import { Component, Input, OnInit } from '@angular/core';
import { ImageInfo } from 'src/app/models/image-info.model';

@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss']
})
export class ScoreItemComponent implements OnInit {
  @Input() itemId: number = 0;

  @Input() scoreItemStatus: string = '';

  @Input() imageInfo!: ImageInfo

  public isCorrect: boolean = false

  public isItemInfoVisible: boolean = false

  constructor() { }

  public ngOnInit(): void {
    if(this.scoreItemStatus === 'correct') {
      this.isCorrect = true;
    }
  }

  public toggleItemInfo(): void {
    if (this.isCorrect) {
      this.isItemInfoVisible = !this.isItemInfoVisible
    }
  }
}
