import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {}

  log(value: any, ...rest: any[]) {
    if (isDevMode) {
      console.log(value, ...rest);
    }
  }

  error(value: any, ...rest: any[]) {
    if (isDevMode) {
      console.error(value, ...rest);
    }
  }

  warn(value: any, ...rest: any[]) {
    if (isDevMode) {
      console.warn(value, ...rest);
    }
  }
}
