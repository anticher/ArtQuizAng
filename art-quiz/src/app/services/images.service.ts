import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface imageInfoItem {
  author: string,
  name: string,
  year: string,
  imageNum: string
}

interface imageInfoResponse {
  imagesInfo: imageInfoItem[];
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imagesInfo = {}

  constructor(private http: HttpClient) {
  
  }
  getImagesInfo(): Observable<any> {
    return this.http.get('../assets/images/imagesInfo.json')
  }

  getImageSquare(id: string): Observable<Object> {
    return this.http.get('../assets/images/square/' + id + '.jpg')
  }

  getImageFull(id: string): Observable<Object> {
    return this.http.get('../assets/images/full/' + id + '.jpg')
  }

}
