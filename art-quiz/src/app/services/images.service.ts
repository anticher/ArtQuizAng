import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageInfo } from '../models/image-info.model';

interface imageInfoResponse {
  imagesInfo: ImageInfo[];
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imagesInfo = {}

  constructor(private http: HttpClient) {
  
  }
  getImagesInfo(): Observable<ImageInfo[]> {
    return this.http.get<ImageInfo[]>('../assets/images/imagesInfo.json')
  }

  getImageSquare(id: string): Observable<Object> {
    return this.http.get('../assets/images/square/' + id + '.jpg')
  }

  getImageFull(id: string): Observable<Object> {
    return this.http.get('../assets/images/full/' + id + '.jpg')
  }

}
