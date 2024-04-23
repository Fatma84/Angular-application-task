
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private progressSubject = new Subject<number>(); // Change to number
  progress$ = this.progressSubject.asObservable();

  // Method to update progress
  updateProgress(progress: number) {
    this.progressSubject.next(progress);
  }
}
