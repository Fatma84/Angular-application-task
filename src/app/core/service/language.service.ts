import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DirectionService } from '@core/service/direction.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public languages: string[] = ['en', 'ar'];
  constructor(
    private translate: TranslateService,
    private directionService: DirectionService,
  ) {
    let browserLang: string;
    translate.addLangs(this.languages);

    if (localStorage.getItem('lang')) {
      browserLang = localStorage.getItem('lang') as string;
    } else {
      browserLang = translate.getBrowserLang() as string;
    }
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }

  public setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.directionService.setDirection(lang === 'ar' ? 'rtl' : 'ltr');
  }
}
