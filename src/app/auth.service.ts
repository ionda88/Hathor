import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class AuthService {

  private hostname = '';
  private hostnameURL = '';

  constructor(public http: HttpClient,
              private httpClient: HttpClient,
              @Inject(DOCUMENT) private document: any,
              //        private window: Window,
              //  private demoapp: DemoApp,
              public router: Router
  ) {

    this.hostname = this.document.location.hostname;
    if (this.hostname == null || this.hostname == "") {
      this.hostname = "localhost";
    }
    this.hostnameURL = 'http://' + this.hostname + ':8888/InfolineV3/rest'; // Para Infoline


  }
}
