import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";

export class CachedHttpTranslationLoader implements TranslateLoader {

  cache$: Observable<Object> | null = null;
  cachedLang: string | null = null;

  constructor(private http: HttpClient, public prefix: string = "../../../assets/i18n/", public suffix: string = ".json") { }

  /**
   * Gets the translations from the server
   */
  public getTranslation(lang: string): Observable<Object> {

    // if (this.cachedLang === lang && this.cache$ !== null && this.counter === 1) return this.cache$;

    if (!this.cache$ || this.cachedLang !== lang) {
      this.cache$ = this.http.get(`${this.prefix}${lang}${this.suffix}`).pipe(shareReplay(1));
      this.cachedLang = lang;
    }

    return this.cache$;
  }
}