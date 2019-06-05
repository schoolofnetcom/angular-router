import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SobreComponent } from './sobre/sobre.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ContatoComponent } from './contato/contato.component';
import { PostagemComponent } from './postagem/postagem.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SobreComponent,
    PaginaNaoEncontradaComponent,
    ContatoComponent,
    PostagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
