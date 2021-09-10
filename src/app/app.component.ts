import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hathor';
  constructor(private router: Router) {}
  chamaLogin() {
    //window.alert("top");
    this.router.navigate(['login']);
  }
}
