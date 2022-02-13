import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imagesInfo = {}

  constructor(private http: HttpClient) {
  
  }
  getImages() {
    return this.http.get('../assets/imagesInfo.json');
  }
}
