export interface IStateGlobal {
  key: string;
  state: {
    loading: boolean;
    useLanguage?: string;
  }
}

export enum StateGlobal {
  loading = "loading",
  useLanguage = "useLanguage"
}