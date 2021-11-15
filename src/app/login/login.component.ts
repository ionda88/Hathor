import { Component, OnInit } from '@angular/core';
import {Usuario} from "../models/usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioAtual: Usuario = new Usuario();
  constructor() { }

  ngOnInit(): void {
  }

  logar() {
    window.alert("email:" + this.usuarioAtual.email + " | senha" + this.usuarioAtual.senha);
  }
}
