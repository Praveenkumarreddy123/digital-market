import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../classes/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginDetails: User = new User();
  public isSubmitted: boolean;
  constructor(public service:  DataService) {
  }

  ngOnInit() {
  }

  signIn(loginform) {
    this.isSubmitted = true;
    if (loginform.valid) {
      this.loginDetails.login();
    }
  }
}
