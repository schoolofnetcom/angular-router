import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { SobreComponent } from './sobre/sobre.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ContatoComponent } from './contato/contato.component';
import { PostagemComponent } from './postagem/postagem.component';

const routes: Routes = [
  {path:"",component:PrincipalComponent},
  {path:"sobre",component:SobreComponent},
  {path:"contato",component:ContatoComponent},
  {path:"postagem/:id", component:PostagemComponent},
  {path:"**",component:PaginaNaoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
