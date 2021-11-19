import {Component, OnInit, ViewChild} from '@angular/core';
import {Postagem} from "../models/postagem";
import {Topico} from "../models/topico";
import {RestapiService} from "../restapi.service";
import {Usuario} from "../models/usuario";
import {NavigationExtras} from "@angular/router";
import {ModalDirective} from "ngx-bootstrap/modal";
import {AuthGuardService} from "../auth-guard.service";

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

  @ViewChild('modalNovoTopico', {static: false}) modalNovoTopico: ModalDirective;
  novoTopico: Topico = new Topico();
  constructor(private service: RestapiService,
              public authGuardService: AuthGuardService) { }

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

  addTopico() {
    this.novoTopico = new Topico();
    this.novoTopico.idUsuario = this.authGuardService.usuarioAtual.id;
    this.novoTopico.dtCriacao = new Date();
    this.modalNovoTopico.config.ignoreBackdropClick = true;
    this.modalNovoTopico.show();
  }

  fechaNovoTopico(){
    this.novoTopico = new Topico();
    this.modalNovoTopico.hide();
  }

  salvarNovoTopico() {
    this.service.salvarNovoTopico(this.novoTopico).subscribe(
      result => {
        this.fechaNovoTopico();
        this.buscaTopicos();
      }
    );
  }
}
