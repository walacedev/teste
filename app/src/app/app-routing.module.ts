import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';
 
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cardapio', loadChildren: './cardapio/cardapio.module#CardapioPageModule' },
  {
    path: 'cardapio/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: './cardapio/cardapio.module#CardapioPageModule'
  },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'produto', loadChildren: './produto/produto.module#ProdutoPageModule' },
  {
    path: 'produto/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: './produto/produto.module#ProdutoPageModule'
  },
  { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosPageModule' },
  {
    path: 'produtos/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: './produtos/produtos.module#ProdutosPageModule'
  },
  { path: 'pedido', loadChildren: './pedido/pedido.module#PedidoPageModule' },
  {
    path: 'pedido/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: './pedido/pedido.module#PedidoPageModule'
  },
  { path: 'minha-conta', loadChildren: './minha-conta/minha-conta.module#MinhaContaPageModule' },
  {
    path: 'minha-conta/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: './minha-conta/minha-conta.module#MinhaContaPageModule'
  },
  { path: 'pedidos', loadChildren: './pedidos/pedidos.module#PedidosPageModule' },
  { path: 'pedido-info', loadChildren: './pedido-info/pedido-info.module#PedidoInfoPageModule' },
  { path: 'locais', loadChildren: './locais/locais.module#LocaisPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'conta', loadChildren: './conta/conta.module#ContaPageModule' },
  { path: 'avaliar', loadChildren: './avaliar/avaliar.module#AvaliarPageModule' },
  {
    path: 'avaliar/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: './avaliar/avaliar.module#AvaliarPageModule'
  },
  { path: 'notificacoes', loadChildren: './notificacoes/notificacoes.module#NotificacoesPageModule' },
  { path: 'enderecos', loadChildren: './enderecos/enderecos.module#EnderecosPageModule' },
  { path: 'pagamento', loadChildren: './pagamento/pagamento.module#PagamentoPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
