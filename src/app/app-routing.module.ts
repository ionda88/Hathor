import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {PostagensComponent} from "./postagens/postagens.component";
import {AuthGuardService} from "./auth-guard.service";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'postagens', component: PostagensComponent, canActivate: [AuthGuardService] },
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
