import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class HeaderService {

  public actualName = new EventEmitter<string>();
  public dropdown = new EventEmitter<boolean>();
  public isUser = new EventEmitter<boolean>();

  public setHeaderName(name: string): void {
    this.actualName.emit(name);
  }

  public showDropdown(show: boolean): void {
    this.dropdown.emit(show);
  }

  public showMenu(show: boolean): void {
    this.isUser.emit(show);
  }
}
