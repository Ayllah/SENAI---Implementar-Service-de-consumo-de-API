import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProdutoService } from '../../servicos/produto.service';

@Component({
  selector: 'app-painel-principal',
  standalone: false,
  templateUrl: './painel-principal.html',
  styleUrl: './painel-principal.css'
})
export class PainelPrincipal  implements OnInit {
produtos: any[] = [];

constructor(private produtoService: ProdutoService, private router: Router) {}

ngOnInit(): void {
  this.listarProdutos();
}

listarProdutos() {
  this.produtoService.obterProdutos().subscribe((dados) => {
  this.produtos = dados; 
}); 
}

excluirProduto(id: number) {
  if (confirm("Deseja realmente excluir este produto?")) {
    this.produtoService.deletarProduto(id).subscribe(() => {
    alert("Produto excluído com sucesso!");
    this.listarProdutos(); 
  });
 }
 }
  editarProduto(id: number) {
    this.router.navigate(['/cadastro-produto', id]);
  }
}
