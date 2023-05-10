import { Injectable } from '@angular/core';
import { createStore } from './service';
import { IStateGlobal } from '../models/global-state';
import { StateObject } from '../models';
import { TranslateService } from '@ngx-translate/core';

export enum ISource {
  GLOBAL = 'global'
}

export function createInitialState(): IStateGlobal[] {
  return [{
    key: ISource.GLOBAL,
    state: {
      loading: false,
      useLanguage: 'es',
    }
  }];
}

@Injectable({
  providedIn: 'root'
})
export class StoreManagerService {
  currentSubscription: StateObject;

  constructor(public translateService: TranslateService) {
    this.currentSubscription = createStore(createInitialState()).getEntity(ISource.GLOBAL);
  }

  getObservable() {
    return this.currentSubscription.getObservable();
  }

  getPropertyFromObservable(property: string) {
    return this.currentSubscription.getPropertyFromObservable(property);
  }

  getDataCurrentUser() {
    const currentUser = localStorage.getItem('authStateUser')
    if (!currentUser) return;
    return JSON.parse(currentUser);
  }

  setObservableValues(value: any, property?: string, emit?: boolean) {
    this.currentSubscription.setObservableValues(value, property, emit)
  }

  showMessage() {

  }
}
