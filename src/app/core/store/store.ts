import { BehaviorSubject, Observable } from 'rxjs';

export class Store<T> {
  private currentStateSubject!: BehaviorSubject<T>;
  public readonly currentState: Observable<T>;

  protected constructor(initialState: T) {
    this.currentStateSubject = new BehaviorSubject(initialState);
    this.currentState = this.currentStateSubject.asObservable();
  }

  get getObservableCurrentState$(): Observable<T> {
    return this.currentStateSubject.asObservable();
  }

  get getValueCurrentState(): T {
    return this.currentStateSubject.getValue();
  }

  setState(nextState: T): void {
    this.currentStateSubject.next(nextState);
  }

  set(value: any) {
    this.currentStateSubject.next(value);
  }
}
