import { Component, OnInit } from '@angular/core';
import {Postagem} from "./entities/postagem";

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  deFiltroConteudo = "";

  listaPostagens: Postagem[] = [];
  constructor() { }

  ngOnInit(): void {
    let postagemExemplo1 = new Postagem();
    postagemExemplo1.id.idPostagem = 1;
    postagemExemplo1.deTitulo = "Postagem 1"
    postagemExemplo1.deMensagem = "\n" +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet orci ut erat ultricies porttitor. Suspendisse fermentum ut tellus non convallis. Vivamus hendrerit ipsum vel nisi elementum condimentum. Nunc diam eros, ultricies non neque tempus, tincidunt vehicula enim. Duis mattis sodales justo non venenatis. Nullam vitae finibus lacus. Suspendisse."

    let postagemExemplo2 = new Postagem();
    postagemExemplo2.id.idPostagem = 2;
    postagemExemplo2.deTitulo = "Postagem 2"
    postagemExemplo2.deMensagem = "\n" +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet orci ut erat ultricies porttitor. Suspendisse fermentum ut tellus non convallis. Vivamus hendrerit ipsum vel nisi elementum condimentum. Nunc diam eros, ultricies non neque tempus, tincidunt vehicula enim. Duis mattis sodales justo non venenatis. Nullam vitae finibus lacus. Suspendisse."

    let postagemExemplo3 = new Postagem();
    postagemExemplo3.id.idPostagem = 3;
    postagemExemplo3.deTitulo = "Postagem 3"
    postagemExemplo3.deMensagem = "\n" +
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet orci ut erat ultricies porttitor. Suspendisse fermentum ut tellus non convallis. Vivamus hendrerit ipsum vel nisi elementum condimentum. Nunc diam eros, ultricies non neque tempus, tincidunt vehicula enim. Duis mattis sodales justo non venenatis. Nullam vitae finibus lacus. Suspendisse."

    this.listaPostagens = [postagemExemplo1, postagemExemplo2, postagemExemplo3];
  }

}
