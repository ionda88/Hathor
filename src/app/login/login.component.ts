import { Component, OnInit } from '@angular/core';
import {Usuario} from "../models/usuario";
import {HttpClient} from "@angular/common/http";
import {RestapiService} from "../restapi.service";

import {NavigationExtras, Router} from "@angular/router";
import {AuthGuardService} from "../auth-guard.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioAtual: Usuario = new Usuario();
  constructor(
    private service: RestapiService,
    public authGuardService: AuthGuardService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logar() {
    //window.alert("email:" + this.usuarioAtual.email + " | senha" + this.usuarioAtual.senha);
    this.service.login(this.usuarioAtual).subscribe(
      result => {
        if(result != null) {
          this.authGuardService.usuarioAtual = result;
          //window.alert("Logado com sucesso!");
          this.authGuardService.login();
          let sessionId = 123456789;

          // Set our navigation extras object
          // that contains our global query params and fragment
          let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
          };

          // Navigate to the login page with extras
          this.router.navigate(['/topicos'], navigationExtras);
        } else {
          window.alert("Email e/ou Senha incorretos!");
        }
      }
    );

  }
}
