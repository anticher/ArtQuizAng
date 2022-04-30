import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss']
})
export class ScoreItemComponent implements OnInit {
  @Input() itemId: number = 0;

  @Input() scoreItemStatus: string = '';

  public isCorrect: boolean = false

  constructor() { }

  ngOnInit(): void {
    if(this.scoreItemStatus === 'correct') {
      this.isCorrect = true;
    }
  }
}
