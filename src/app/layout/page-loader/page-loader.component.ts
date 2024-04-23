import { Component } from '@angular/core';
import { LoadingBarModule } from '@ngx-loading-bar/core';
@Component({
    selector: 'app-page-loader',
    templateUrl: './page-loader.component.html',
    styleUrls: ['./page-loader.component.scss'],
    standalone: true,
    imports: [LoadingBarModule],
})
export class PageLoaderComponent {
  constructor() {
    // constructor
  }
}
