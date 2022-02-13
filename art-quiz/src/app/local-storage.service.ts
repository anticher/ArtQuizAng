import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  getToLocal(name: string): string | null {
    return localStorage.getItem(name)
  }

  setToLocal(name: string, descr:string) {
    localStorage.setItem(name, descr)
  }
}
