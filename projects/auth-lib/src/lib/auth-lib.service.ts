import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class AuthLibService {

  private userName: string;

  public get user(): string {
    return this.userName;
  }

  constructor() {
    console.log('AuthLibService');
  }

  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
  }

}
