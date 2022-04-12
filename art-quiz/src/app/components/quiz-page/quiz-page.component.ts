import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  id = 0
  answersStrings: string[] = []
  correctAnswer = ''
  imagesInfo: any
  showPicture = false;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    public imagesService: ImagesService,
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.imagesService.getImagesInfo().subscribe(res => {
      this.imagesInfo = res

      this.correctAnswer = this.imagesInfo[+this.id].author
      this.answersStrings.push(this.correctAnswer)

      while (this.answersStrings.length < 4) {
        const index = this.getRandomInt(0, 240)
        this.answersStrings.includes(this.imagesInfo[index].author) ? null : this.answersStrings.push(this.imagesInfo[index].author)
      }
      this.shuffleArray(this.answersStrings)
    })


  }

  shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  onVariantClick(event: any) {
    console.log(event.target)
  }

}
