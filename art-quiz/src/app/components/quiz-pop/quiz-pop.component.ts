import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageInfo } from 'src/app/models/image-info.model';

@Component({
  selector: 'app-quiz-pop',
  templateUrl: './quiz-pop.component.html',
  styleUrls: ['./quiz-pop.component.scss']
})
export class QuizPopComponent {
  @Output() nextQuestionEvent: EventEmitter<any> = new EventEmitter();

  @Input() imageInfo: ImageInfo = {author: '', name: '', year: '', imageNum: ''}

  public nextQuestion(): void {
    this.nextQuestionEvent.emit()
  }
}
