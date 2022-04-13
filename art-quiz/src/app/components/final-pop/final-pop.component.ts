import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-final-pop',
  templateUrl: './final-pop.component.html',
  styleUrls: ['./final-pop.component.scss']
})
export class FinalPopComponent {
  @Output() returnToCategories: EventEmitter<any> = new EventEmitter();

  @Input() score: string = '';

  public greetings: string = 'Congratulations!'

  public moveToCategories(): void {
    this.returnToCategories.emit()
  }
}
