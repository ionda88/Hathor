import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Postagem} from "../models/postagem";
import {Topico} from "../models/topico";
import {RestapiService} from "../restapi.service";

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  deFiltroConteudo = "";

  listaPostagens: Postagem[] = [];
  constructor(private service: RestapiService) { }
  @Input() topicoSelecionado: Topico;
  @Output() resposta = new EventEmitter();

  ngOnInit(): void {
    this.buscaPostagemTopico();
  }

  buscaPostagemTopico() {
    //window.alert("email:" + this.usuarioAtual.email + " | senha" + this.usuarioAtual.senha);
    this.service.listaPostagensTopicos(this.topicoSelecionado).subscribe(
      result => {
        if(result != null) {
          this.listaPostagens = result;
        }
      }
    );
  }

  addTopico() {

  }

  voltar() {
    this.resposta.emit();
  }
}
