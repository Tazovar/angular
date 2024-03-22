import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  closeEmitter:EventEmitter<string> = new EventEmitter();
  constructor() { }
}
