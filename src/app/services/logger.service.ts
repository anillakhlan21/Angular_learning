import { ConditionalExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class LoggerService {
  // Logging levels
  private readonly LEVEL_DEBUG = 0;
  private readonly LEVEL_INFO = 1;
  private readonly LEVEL_WARN = 2;
  private readonly LEVEL_ERROR = 3;


  private log(message: string, level: number = this.LEVEL_DEBUG) {
      console.log(message);
  }

  debug(message: string) {
    this.log(`DEBUG: ${message}`, this.LEVEL_DEBUG);
  }

  info(message: string) {
    this.log(`INFO: ${message}`, this.LEVEL_INFO);
  }

  warn(message: string) {
    this.log(`WARN: ${message}`, this.LEVEL_WARN);
  }

  error(message: string) {
    this.log(`ERROR: ${message}`, this.LEVEL_ERROR);
  }
}
