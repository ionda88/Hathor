import { Component, OnInit } from '@angular/core';
import {Postagem} from "../models/postagem";
import {Topico} from "../models/topico";
import {RestapiService} from "../restapi.service";
import {Usuario} from "../models/usuario";
import {NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.css']
})
export class TopicosComponent implements OnInit {

  deFiltroConteudo = "";
  viewTopicos = false;
  topicoSelecionado: Topico = new Topico();
  listaTopicos: Topico[] = [];
  constructor(private service: RestapiService) { }

  ngOnInit(): void {
    this.buscaTopicos();
  }

  buscaTopicos() {
    //window.alert("email:" + this.usuarioAtual.email + " | senha" + this.usuarioAtual.senha);
    this.service.getTopicos().subscribe(
      result => {
        if(result != null) {
          this.listaTopicos = result;
        }
      }
    );
  }

  visualizarPostagens(topico: Topico) {
    this.topicoSelecionado = topico;
    this.viewTopicos = true;
  }

  retornoPostagens() {
    this.topicoSelecionado = new Topico();
    this.viewTopicos = false;
  }
}
