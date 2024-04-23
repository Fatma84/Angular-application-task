// spinner.component.ts
import { Component, OnInit } from '@angular/core';
import { ProgressService } from "../../../pages/admin/services/progress.service";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  progress: number = 0;
  constructor(private progressService: ProgressService) { }
  ngOnInit(): void {
    this.progressService.progress$.subscribe((progress: number) => {
      this.progress = progress;
    });

    this.simulateProgress();
  }

  simulateProgress() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      if (progress <= 100) {
        this.progressService.updateProgress(progress);
      } else {
        clearInterval(interval);
      }
    }, 100);
  }
}
