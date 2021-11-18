import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "./models/usuario";

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
}
