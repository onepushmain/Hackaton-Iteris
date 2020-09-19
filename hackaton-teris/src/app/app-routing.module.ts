import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjetoPageComponent } from './components/projeto-page/projeto-page.component';


const routes: Routes = [
  { path: ' ', component: ProjetoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
