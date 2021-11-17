import { Component, OnInit } from '@angular/core';
import {Usuario} from "../models/usuario";
import {HttpClient} from "@angular/common/http";
import {RestapiService} from "../restapi.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioAtual: Usuario = new Usuario();
  constructor(private service: RestapiService) { }

  ngOnInit(): void {
  }

  logar() {
    //window.alert("email:" + this.usuarioAtual.email + " | senha" + this.usuarioAtual.senha);
    this.service.login(this.usuarioAtual).subscribe(
      result => {
       let usuario: Usuario = result;
       window.alert(usuario.nome);
      }
    );

  }
}
