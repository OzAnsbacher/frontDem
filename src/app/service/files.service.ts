import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  private filesSubject = new BehaviorSubject<File | null>(null);
  files$ = this.filesSubject.asObservable(); // Observable שניתן להאזין לו

  sendFile(file: File) {
    this.filesSubject.next(file); // מעדכן את הקובץ שנשלח
  }
}
