import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  getToLocal(name: string): string {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name)!
    }
    return ''
  }

  setToLocal(name: string, descr:string) {
    localStorage.setItem(name, descr)
  }
}
