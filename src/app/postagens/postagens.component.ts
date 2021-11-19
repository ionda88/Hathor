import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Postagem} from "../models/postagem";
import {Topico} from "../models/topico";
import {RestapiService} from "../restapi.service";
import {ModalDirective} from "ngx-bootstrap/modal";
import {AuthGuardService} from "../auth-guard.service";

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  deFiltroConteudo = "";
  listaPostagens: Postagem[] = [];
  novaPostagem: Postagem = new Postagem();

  @Input() topicoSelecionado: Topico;
  @Output() resposta = new EventEmitter();
  @ViewChild('modalNovaPostagem', {static: false}) modalNovaPostagem: ModalDirective;

  constructor(private service: RestapiService,
              public authGuardService: AuthGuardService) { }

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

  voltar() {
    this.resposta.emit();
  }


  addPostagem() {
    this.novaPostagem = new Postagem();
    this.novaPostagem.idUsuario = this.authGuardService.usuarioAtual.id;
    this.novaPostagem.idTopico = this.topicoSelecionado.id;
    this.novaPostagem.dtPostagem = new Date();
    this.modalNovaPostagem.config.ignoreBackdropClick = true;
    this.modalNovaPostagem.show();
  }

  fechaNovaPostagem(){
    this.novaPostagem = new Postagem();
    this.modalNovaPostagem.hide();
  }

  salvarNovaPostagem() {
    this.service.salvarNovaPostagem(this.novaPostagem).subscribe(
      result => {
        this.fechaNovaPostagem();
        this.buscaPostagemTopico();
      }
    );
  }
}
