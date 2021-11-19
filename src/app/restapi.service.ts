import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "./models/usuario";
import {Topico} from "./models/topico";
import {Postagem} from "./models/postagem";

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) {
  }

  montaHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  login(usuario: Usuario) {
    //const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(email+":"+senha)});
    return this.http.post<Usuario>("http://localhost:8080/api/validaLogin", usuario, this.montaHttpOptions());
  }

  signUp(usuario: Usuario) {
    //const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(email+":"+senha)});
    return this.http.post<Usuario>("http://localhost:8080/api/signUp", usuario, this.montaHttpOptions());
  }

  getTopicos() {
    //const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(email+":"+senha)});
    return this.http.get<Topico[]>("http://localhost:8080/api/getTopicos");
  }

  listaPostagensTopicos(topicoSelecionado: Topico) {
    //const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(email+":"+senha)});
    return this.http.post<Postagem[]>("http://localhost:8080/api/listaPostagensTopicos", topicoSelecionado, this.montaHttpOptions());
  }

  salvarNovoTopico(novoTopico: Topico) {
    return this.http.post<Usuario>("http://localhost:8080/api/salvarNovoTopico", novoTopico, this.montaHttpOptions());
  }

  salvarNovaPostagem(novaPostagem: Postagem) {
    return this.http.post<Usuario>("http://localhost:8080/api/salvarNovaPostagem", novaPostagem, this.montaHttpOptions());
  }
}
