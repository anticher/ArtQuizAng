import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageInfo } from '../models/image-info.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService) {
  
  }
  
  getImagesInfo(): Observable<ImageInfo[]> {
    if (this.localStorageService.getFromLocal('lang') === 'ru') {
      return this.http.get<ImageInfo[]>('../assets/images/imagesInfoRu.json')
    }
    return this.http.get<ImageInfo[]>('../assets/images/imagesInfo.json')
  }

  getImageSquare(id: string): Observable<Object> {
    return this.http.get('../assets/images/square/' + id + '.jpg')
  }

  getImageFull(id: string): Observable<Object> {
    return this.http.get('../assets/images/full/' + id + '.jpg')
  }
}
