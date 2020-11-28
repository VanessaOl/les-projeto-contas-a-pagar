import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Lazyload
  { path: 'dashboard', loadChildren: './sections/dashboard/dashboard.module#DashboardModule', data: { title: 'Dashboard' } },
  { path: 'contas', loadChildren: './sections/contas/contas.module#ContasModule' },
  { path: 'fornecedores', loadChildren: './sections/fornecedores/fornecedores.module#FornecedoresModule' },
  { path: 'banking', loadChildren: './sections/banking/banking.module#BankingModule' },


  // Wild Cards
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
