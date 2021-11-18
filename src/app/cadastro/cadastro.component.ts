import { Component, OnInit } from '@angular/core';
import {Usuario} from "../models/usuario";
import {NavigationExtras, Router} from "@angular/router";
import {RestapiService} from "../restapi.service";
import {AuthGuardService} from "../auth-guard.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuarioAtual: Usuario = new Usuario();
  constructor(private service: RestapiService,
              public authGuardService: AuthGuardService,
              private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    //window.alert("email:" + this.usuarioAtual.email + " | senha" + this.usuarioAtual.senha);
    this.service.signUp(this.usuarioAtual).subscribe(
      result => {
        if(result == null) {
          window.alert("Email já cadastrado!");
        } else {
          window.alert("Cadastrado com sucesso!");
          this.authGuardService.usuarioAtual = result;

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
        }
      }
    );

  }
}
