import { Pipe, PipeTransform } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Pipe({
  name: 'languagePipe'
})
export class LanguagePipe implements PipeTransform {

  enVocabulary = {
    'Painter quiz': 'Painter quiz',
    'Picture quiz': 'Picture quiz',
    'Settings': 'Settings',
    'Back': 'Back',
    'Defaults': 'Defaults',
    'Change language': 'Change language',
    'Sounds volume': 'Sounds volume',
    'Music volume': 'Music volume',
    'Time game': 'Time game',
    'Categories': 'Categories',
    'Scores': 'Scores',
    'Who is the author of this picture?': 'Who is the author of this picture?',
    'What picture was painted by': 'what picture was painted by',
    'Next': 'Next',
    'Congratulations': 'Congratulations'
  }
  ruVocabulary = {
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
    'Next': 'Следующий',
    'Congratulations': 'Поздравляем'
  }
mapEn = new Map(Object.entries(this.enVocabulary))
mapRu = new Map(Object.entries(this.ruVocabulary))

constructor(private localStorageService: LocalStorageService) { }

  transform(inputString: string): string {
    let lang = this.localStorageService.getToLocal('lang')
    if (lang === 'ru') {
      return this.mapRu.get(inputString) ? this.mapRu.get(inputString)! : ''
    }
    return this.mapEn.get(inputString) ? this.mapEn.get(inputString)! : ''
  }

}
