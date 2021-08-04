import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPorfolioComponent } from './components/main-porfolio/main-porfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: MainPorfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
