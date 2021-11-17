import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PostagensComponent } from './postagens/postagens.component';
import { InputtextComponent } from "./global/components/inputtext/inputtext.component";
import {FormsModule} from "@angular/forms";
import {RestapiService} from "./restapi.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    PostagensComponent,
    InputtextComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
