import { Pipe, PipeTransform, SimpleChanges } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Pipe({
  name: 'language',
  pure: false
})
export class LanguagePipe implements PipeTransform {
  private ruVocabulary = {
    'Painter quiz': 'Угадай художника',
    'Picture quiz': 'Угадай картину',
    'Settings': 'Настройки',
    'Back': 'Назад',
    'Defaults': 'Стандарт',
    'Change language': 'Поменять язык',
    'Sounds volume': 'Громкость звуков',
    'Music volume': 'Громкость музыки',
    'Time game': 'Игра на время',
    'Categories': 'Категории',
    'Scores': 'Результаты',
    'Who is the author of this picture?': 'Кто автор этой картины?',
    'What picture was painted by': 'Какую картину написал',
    'Next': 'Далее',
    'Congratulations!': 'Поздравляем!'
  }
  private mapRu: Map<string, string> = new Map(Object.entries(this.ruVocabulary))

  constructor(private localStorageService: LocalStorageService) {
  }

  transform(value: string): string {
    const lang = this.localStorageService.getToLocal('lang')
    if (lang === 'ru') {
      return this.mapRu.get(value) ? this.mapRu.get(value)! : ''
    }
    return value
  }
}
