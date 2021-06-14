import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userName: string = '';

  constructor(private authService: AuthLibService) { }

  login() {
    this.authService.login(this.userName, null);
  }

}
