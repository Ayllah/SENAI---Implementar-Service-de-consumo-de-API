import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroProduto } from './componentes/cadastro-produto/cadastro-produto';
import { PainelPrincipal } from './componentes/painel-principal/painel-principal';

const routes: Routes = [

  {path: 'painel-principal', component: PainelPrincipal },

  { path: 'cadastro-produto', component:CadastroProduto },
  { path: 'cadastro-produto/:id', component:CadastroProduto },
  { path: '', redirectTo: '/painel-principal', pathMatch: 'full' },
  
  {path: '', redirectTo: '/painel-principal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }