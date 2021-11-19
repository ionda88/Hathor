import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthGuardService} from "./auth-guard.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hathor';
  constructor(private router: Router,
              public authGuardService: AuthGuardService) {}
  chamaLogin() {
    //window.alert("top");
    this.router.navigate(['login']);
  }
}
