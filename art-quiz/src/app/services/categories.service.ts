import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategoriesAndScoresImagesIndexes(categoryType: string, imageIndex?: number): number[] {
    const array: number[] = []
    let imageNum: number = imageIndex ? imageIndex : 0
    switch (categoryType) {
      case 'author-quizes':
        while (array.length < 12) {
          array.push(imageNum)
          imageNum += 10
        }
        break
      case 'picture-quizes':
        imageNum = 120
        while (array.length < 12) {
          array.push(imageNum)
          imageNum += 10
        }
        break
      case 'author-scores':
        while (array.length < 10) {
          array.push(imageNum)
          imageNum += 1
        }
        break
      case 'picture-scores':
        while (array.length < 10) {
          array.push(imageNum)
          imageNum += 1
        }
        break
      default:
        while (array.length < 10) {
          array.push(imageNum)
          imageNum += 1
        }
        break
    }
    return array
  }

}
