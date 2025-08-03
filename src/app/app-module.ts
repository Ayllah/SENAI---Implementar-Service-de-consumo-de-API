import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { Rodape } from './componentes/rodape/rodape';
import { Menu } from './componentes/menu/menu';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { CadastroProduto } from './componentes/cadastro-produto/cadastro-produto';
import { PainelPrincipal } from './componentes/painel-principal/painel-principal';

@NgModule({
  declarations: [
    App,
    Rodape,
    Menu,
    CadastroProduto,
    PainelPrincipal

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
