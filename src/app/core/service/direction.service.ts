import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DirectionService {
  private data = new BehaviorSubject('');
  currentData = this.data.asObservable();

  private renderer!: Renderer2;
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  setDirection(direction: 'rtl' | 'ltr') {
    const isRtl = direction === 'rtl';

    document.getElementsByTagName('html')[0].setAttribute('dir', direction);
    if (isRtl) {
      this.renderer.addClass(document.body, 'rtl');
    } else {
      this.renderer.removeClass(document.body, 'rtl');
    }

    this.data.next(direction);
    localStorage.setItem('isRtl', String(isRtl));
  }

  updateDirection(item: string) {
    this.data.next(item);
  }
}
