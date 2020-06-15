import { ErrorHandler, Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private errorHandler: ErrorHandler) {}

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
