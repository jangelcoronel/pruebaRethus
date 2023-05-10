import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreManagerService } from '@app/core/store/services/store-manager.service';
import { StateGlobal } from '@app/core/store/models/global-state';
import { Observable, Subscribable } from 'rxjs';

@Component({
  selector: 'shared-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.scss']
})
export class SelectLangComponent {
  selectLang: Observable<string>;
  constructor(private storeManager: StoreManagerService) {

    this.selectLang = this.storeManager.getPropertyFromObservable(StateGlobal.useLanguage);
  }

  onEventSetLang(lang: string) {
    this.storeManager.setObservableValues(lang, StateGlobal.useLanguage, true);
  }

}
