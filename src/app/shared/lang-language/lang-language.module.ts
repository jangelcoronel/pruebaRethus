import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CachedHttpTranslationLoader } from './CachedHttpTranslationLoader';
import { HttpClient } from '@angular/common/http';
import { StoreManagerService } from '@app/core/store/services/store-manager.service';


@NgModule({
  declarations: [],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CachedHttpTranslationLoader,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
  exports: [TranslateModule],
})
export class LangLanguageModule {
  constructor(translate: TranslateService, private storageManager: StoreManagerService) {
    this.storageManager.getPropertyFromObservable('useLanguage').subscribe(lang => {
      if (translate.currentLang !== lang) translate.use(lang)
    })

  }
}
