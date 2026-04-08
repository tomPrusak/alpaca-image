import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _value = signal<{ name: string; index: number }>({
    name: '',
    index: 0,
  });

  value = this._value.asReadonly();

  updateValue(name: string, index: number) {
    this._value.set({ name, index });
  }
}
